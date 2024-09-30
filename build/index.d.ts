import * as hdType from './types';
declare class GoogleSerpApi {
    private apiKey;
    constructor(apiKey: string);
    private formatResponse;
    getSearchResults(params: hdType.GetSearchResultsParams): Promise<any>;
    scrape(params: hdType.GetSearchResultsParams): Promise<any>;
}
export = GoogleSerpApi;
//# sourceMappingURL=index.d.ts.map