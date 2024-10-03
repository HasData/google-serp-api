# Hasdata JavaScript Google SERP API SDK

The Google SERP API provides real-time access to structured Google search results, offering no blocks or CAPTCHAs.

## Table of Contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
   - [Obtaining HasData API Key](#obtaining-hasdata-api-key)
   - [Basic Usage Example](#basic-usage-example)
   - [Usage](#usage)
4. [Request Headers](#request-headers)
5. [Supported Parameters](#supported-parameters)
6. [Advanced Features](#advanced-features)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

## Installation

To use the Hasdata JavaScript Google SERP API SDK, you can install it:

```bash
npm i @scrapeit-cloud/google-serp-api
```

## Getting Started

### Obtaining HasData API Key
Signup to HasData to [get your API key](https://app.hasdata.com/sign-up) and some free credits to get started.

### Basic Usage Example

```js
const GoogleSerpApi = require('@scrapeit-cloud/google-serp-api');

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
  }
};

main();
```

### Usage

To make API requests using the SDK, follow these steps:

1. Import the `GoogleSerpApi` class from the SDK:

```js
const GoogleSerpApi = require('@scrapeit-cloud/google-serp-api')
```

2. Replace `'INSERT_YOUR_API_KEY_HERE'` with your actual API key:

```js
const apiKey = 'YOUR_HASDATA_API_KEY';
```

3. Create an instance of the `GoogleSerpApi` class with your API key:

```js
const client = new GoogleSerpApi(apiKey);
```

4. Specify the search parameters in a dictionary:

```js
const params = {
  "q": "Coffee",
  "location": "Austin,Texas,United States",
  "domain": "google.com",
  "gl": "us"
};
```

5. Make the API request using the `getSearchResults` method and get the response:

```js
const response = await client.getSearchResults(params);
```

6. Access the response data as text:

```js
console.log(response);
```

## Request Headers

| Parameter     | Description |
|---------------|-------------|
| x-api-key | Your secret API key

## Supported Parameters

The SDK supports various parameters that allow you to customize your requests. Here are the supported parameters:

| Parameter | Default Value | Description | Example |
|-----------|-------------|---------|---------|
|q|-|**Required**. Specify the search term for which you want to scrape the SERP.|`q=Coffee`|
|location|-|**Optional**. Google canonical location for the search.|`location=Austin,Texas,United States`|
|domain|google.com|**Optional**. Google domain to use. Default is google.com.|`domain=google.com`|
|gl|us|**Optional**. The two-letter country code for the country you want to limit the search to.|`gl=us`|

For more details on each parameter, refer to the [Hasdata documentation](https://docs.hasdata.com/google-serp/serp).

## Advanced Features

The Hasdata JavaScript Google SERP API SDK also supports advanced features to enhance your requests. These features include pagination and filtering options, allowing you to customize and refine your queries. The [documentation](https://docs.hasdata.com/google-serp/serp) provides additional information on advanced parameters.

## Best Practices

To ensure a smooth experience and optimal performance while using the Hasdata JavaScript Google SERP API SDK, consider the following best practices:
To ensure a smooth experience and optimal performance while using the Hasdata JavaScript Google SERP API SDK, consider the following best practices:

1. **Review API Documentation**: Familiarize yourself with the API documentation to understand all available parameters, response formats, and potential limitations. This will help you make effective API requests and interpret the responses accurately.

2. **Use Rate Limiting**: Implement rate limiting in your code to avoid exceeding the API's rate limits. Abiding by rate limits ensures fair usage and prevents unnecessary disruptions to your API access.

3. **Test with Sample Queries**: Before making extensive use of the API, perform test queries with sample data to understand the API's behavior and validate your implementation.

4. **Monitor API Usage**: Regularly monitor your API usage and keep track of your credit balance. This allows you to manage your resources effectively and plan accordingly for your project's needs.

5. **Keep Credentials Secure**: Safeguard your API key and other sensitive credentials. Avoid hardcoding them in your code or publicly sharing them. Use environment variables or secure configuration methods to store such information.

By following these best practices, you can effectively utilize the Hasdata JavaScript Google SERP API SDK and maximize the benefits of web scraping, SEO research, competitor analysis, and market research with accurate and valuable data.

## Troubleshooting

If you encounter issues while using the Hasdata JavaScript Google SERP API SDK, consider the following troubleshooting steps:

1. **Check your API Key**: Ensure that you have provided the correct API key in the request headers. Double-check for any typos or extra spaces in the API key.

2. **Verify Request Parameters**: Review the parameters used in your API request and make sure that all required fields are provided and properly formatted. Incorrect parameters can lead to unexpected results or errors.

3. **Inspect API Response**: Examine the API response for any error messages or status codes. The response may provide valuable insights into the issue, such as invalid queries or authentication problems.

4. **Monitor Credit and Rate Limits**: Ensure that you are not exceeding your plan's credit limits or rate limits. Regularly monitor your API usage and consider implementing rate-limiting logic to avoid hitting the rate limits.