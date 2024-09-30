"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const const_1 = require("./const");
const utils_1 = require("./utils");
const path_1 = __importDefault(require("path"));
class GoogleSerpApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        if (!this.apiKey) {
            throw new Error('API Key is not provided');
        }
        if (!const_1.HASDATA_API_URL) {
            throw new Error('API URL is not provided');
        }
        if (!const_1.HASDATA_API_ENDPOINT) {
            throw new Error('API Endpoint is not provided');
        }
    }
    formatResponse(responseBody) {
        let result;
        try {
            result = JSON.parse(responseBody);
        }
        catch {
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
    async getSearchResults(params) {
        const url = path_1.default.join(const_1.HASDATA_API_URL, const_1.HASDATA_API_ENDPOINT, '/');
        const responseBody = await (0, utils_1.doRequest)(`${url}`, {
            'x-api-key': this.apiKey,
        }, {
            ...params,
            source: 'nodejs_sdk',
        });
        return this.formatResponse(responseBody);
    }
    scrape(params) {
        return this.getSearchResults(params);
    }
}
module.exports = GoogleSerpApi;
//# sourceMappingURL=index.js.map