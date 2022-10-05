const { SCRAPE_IT_CLOUD_API_URL, SCRAPE_IT_CLOUD_API_ENDPOINT } = require('./const');
const { doRequest } = require('./utils/http');

class ScrapeitCloud {
  /**
     *
     * @param {apiKey} apiKey - Scrapeit Cloud API Key
     * @throws {Error}
     *
     */
  constructor(apiKey = null) {
    if (!apiKey) {
      throw new Error('API Key is not provided');
    }

    this.apiKey = apiKey;
  }

  /**
     *
     * @param {params} params - Scrapeit Cloud API Params
     * @throws {Error}
     * @returns {object} Scrapeit Cloud API Response
     *
     */
  async scrape(params) {
    const responseBody = await doRequest(
      `${SCRAPE_IT_CLOUD_API_URL}${SCRAPE_IT_CLOUD_API_ENDPOINT}`,
      {
        'x-api-key': this.apiKey,
      },
      {
        ...params,
        source: 'nodejs_sdk'
      }
    );

    let result = {};

    try {
      result = JSON.parse(responseBody);
    } catch (e) {
      result = responseBody;
    }

    if (result.status === 'ok') {
      return result.scrapingResult;
    }

    if (result.error) {
      throw new Error(result.error);
    }

    if (result.status === 'error') {
      throw new Error(`${result.message}: ${JSON.stringify(result.errors || {})}`);
    }

    return result;
  }
}

module.exports = ScrapeitCloud;
