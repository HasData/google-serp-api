const GoogleSerpApi = require('../build');

const main = async () => {
  const hasdata = new GoogleSerpApi(process.env.HASDATA_API_KEY || 'INSERT_YOUR_API_KEY_HERE');

  try {
    const params = {
      "q": "Coffee",
      "location": "Austin,Texas,United States",
      "domain": "google.com",
      "gl": "us"
    };
    const response = await hasdata.getSearchResults(params);

    console.log(response);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

main();