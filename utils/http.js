const http = require('https');

const doRequest = (url, headers, params) => {
  const urlParams = new URLSearchParams(params).toString();

  const options = {
    headers: {
      ...headers,
    },
  };

  return new Promise((resolve, reject) => {
    const req = http.get(url + '?' + urlParams, options, (res) => {
      let data = '';

      if (res.statusCode < 200 || res.statusCode > 299) {
        const error = new Error(`Request failed with status code ${res.statusCode}`)
        error.response = res

        return reject(error)
      }

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => resolve(data));

      res.on('error', (err) => reject(err));
    });

    req.on('error', (err) => reject(err));

    req.end();
  });
};

module.exports = { doRequest };
