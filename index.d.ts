declare type ScrapeitCloudAPIParams = {
  keyword: string,
  num_results: number,
  country: string,
  domain: string,
}

declare type ScrapeitCloudAPIResponse = {
  currentPage: string|null,
  keyword: string,
  organic: Array<any>,
  pagination: Array<any>,
  relatedKeywords: Array<any>
}

declare class ScrapeitCloud {
  private readonly apiKey: string;
  constructor(apiKey: string);

  scrape(params: ScrapeitCloudAPIParams): Promise<ScrapeitCloudAPIResponse>;
}

export default ScrapeitCloud;
