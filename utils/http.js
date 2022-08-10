const http = require('https');
const nodeUrl = require('url');

const doRequest = (url, headers, params) => {
  const postData = JSON.stringify(params);

  const options = {
    host: nodeUrl.parse(url).hostname,
    path: nodeUrl.parse(url).path,
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
    },
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => resolve(data));

      res.on('error', (err) => reject(err.message));
    });

    req.on('error', (err) => reject(err.message));

    req.write(postData);
    req.end();
  });
};

module.exports = { doRequest };
