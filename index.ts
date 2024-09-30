import { HASDATA_API_URL, HASDATA_API_ENDPOINT } from './const';
import { doRequest } from './utils';
import path from 'path';
import * as hdType from './types';

class GoogleSerpApi {
  constructor(private apiKey: string) {
    if (!this.apiKey) {
      throw new Error('API Key is not provided');
    }

    if (!HASDATA_API_URL) {
      throw new Error('API URL is not provided');
    }

    if (!HASDATA_API_ENDPOINT) {
      throw new Error('API Endpoint is not provided');
    }
  }

  private formatResponse(responseBody: any): any {
    let result: any;

    try {
      result = JSON.parse(responseBody);
    } catch {
      result = responseBody;
    }

    if (result.status === 'ok') {
      return result.scrapingResult
    }

    if (result.error) {
      throw new Error(result.error)
    }

    if (result.status === 'error') {
      throw new Error(`${result.message}: ${JSON.stringify(result.errors || {}) }`);
    }

    return result
  }

  public async getSearchResults(params: hdType.GetSearchResultsParams): Promise<any> {
    const url = path.join(HASDATA_API_URL, HASDATA_API_ENDPOINT, '/');
    const responseBody = await doRequest(
      `${url}`,
      {
        'x-api-key': this.apiKey,
      },
      {
        ...params,
        source: 'nodejs_sdk',
      }
    );

    return this.formatResponse(responseBody);
  }

  public scrape(params: hdType.GetSearchResultsParams): Promise<any> {
    return this.getSearchResults(params);
  }

}

export = GoogleSerpApi;
