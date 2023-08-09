# Google SERP API

This Node.js library provides an easy-to-use interface to call the Scrape-it Cloud Google SERP API, allowing you to scrape search engine result pages (SERPs) at scale. With this library, you can retrieve valuable data from any website in HTML format without the need for a proxy.

## Table of Contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
   - [Obtaining Scrape-it Cloud API Key](#obtaining-scrape-it-cloud-api-key)
   - [Basic Usage Example](#basic-usage-example)
3. [Supported Parameters](#supported-parameters)
   - [Search Query](#search-query)
   - [Geographic Location](#geographic-location)
   - [Localization](#localization)
   - [Search Type](#search-type)
   - [And More...](#and-more)
4. [Response Format](#response-format)
   - [Understanding the JSON Response](#understanding-the-json-response)
   - [Example with keyword: "pizza"](#example-with-keyword-pizza)
5. [Error Handling](#error-handling)
   - [Handling API Errors](#handling-api-errors)
   - [Common Error Codes and Meanings](#common-error-codes-and-meanings)
6. [Advanced Configuration](#advanced-configuration)
   - [Controlling Result Quantity](#controlling-result-quantity)
   - [Using Different Devices (e.g., Mobile, Desktop)](#using-different-devices-eg-mobile-desktop)
7. [Best Practices](#best-practices)
   - [Optimizing API Calls](#optimizing-api-calls)
   - [Dealing with Rate Limits](#dealing-with-rate-limits)
   - [Avoid Overloading the Target Server](#avoid-overloading-the-target-server)
8. [Troubleshooting](#troubleshooting)

## Installation

To install the library, use npm:

```bash
npm i @scrapeit-cloud/google-serp-api
```

## Getting Started

### Obtaining Scrape-it Cloud API Key

Signup to Scrapeit Cloud to [get your API key](https://app.scrape-it.cloud/sign-up) and some free credits to get started.

### Basic Usage Example

```js
const ScrapeitSDK = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const scrapeit = new ScrapeitSDK('INSERT_YOUR_API_KEY_HERE');

  try {
    const response = await scrapeit.scrape({
      "q": "pizza",
      "num": 100,
      "domain": "google.com"
    });

    console.log(response);
  } catch(e) {
    console.log(e.message);
  }
};

main();
```

## Supported Parameters

### Search Query

| Parameter | Description                               | Example            |
|-----------|-------------------------------------------|--------------------|
| q         | **Required**. Query you want to search.  | `q=Coffee`         |

### Geographic Location

| Parameter | Description                               | Example            |
|-----------|-------------------------------------------|--------------------|
| location  | **Optional**. Canonical location name for the search.   | `location=New York, USA` |

### Localization

| Parameter       | Description                             | Example |
|-----------------|-----------------------------------------|---------|
| domain          | **Optional**. Google domain to use.     | `domain=google.co.uk` |
| gl              | **Optional**. Country for the search.   | `gl=us`  |
| hl              | **Optional**. Language for the search.  | `hl=en`  |

### Search Type

| Parameter | Description                               | Example            |
|-----------|-------------------------------------------|--------------------|
| tbm       | **Optional**. Type of search.            | `tbm=isch`         |

**tbm parameter** defines the type of search you want to do. It can be set to:
- (no tbm parameter): regular Google Search,
- isch: Google Images API,
- lcl: Google Local API
- vid: Google Videos API,
- nws: Google News API,
- shop: Google Shopping API.

### And More...

Find the full list of supported parameters on [Scrapeit Cloud documentation](https://scrape-it.cloud/docs/google-scraping-api/serp).

## Response Format

The `scrape-it.cloud` web scraping API provides a flexible response format based on the type of search query. The JSON response object may include various properties depending on the specific search query. Here are the possible properties that can be returned by the API:

- `Ads`: Contains information about advertisements related to the search query.
- `Images Results`: Provides image search results related to the query.
- `Online Related Searches`: Offers online related search suggestions for the query.
- `Online Videos`: Returns online video search results related to the query.
- `Knowledge Graph`: Contains data from the Knowledge Graph for the search query.
- `Local Ads`: Provides local advertisements related to the search query.
- `Local Results`: Contains local search results based on the query.
- `News Results`: Offers news search results related to the query.
- `Organic Results`: Contains organic web search results for the query.
- `Pagination`: Provides information about pagination and navigation through search results.
- `Related Questions`: Contains related questions to the search query.
- `Related Searches`: Provides related search queries to the original query.
- `Search Information`: Contains general information about the search query.
- `Top Stories`: Offers top stories related to the search query.

Please note that not all properties will be present in every API response. The actual properties returned will vary based on the nature of the search and the availability of relevant data.

### Example with keyword: "pizza"

```json
{
  "requestMetadata": {
    "id": "a0ba2fdd-b27d-4e8b-83eb-cf87597b841d",
    "googleUrl": "https://www.google.com/search?q=pizza&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM%3D&gl=us&hl=en&filter=1&oq=pizza&sourceid=chrome&num=10&ie=UTF-8",
    "googleHtmlFile": "https://storage.googleapis.com/scrapeit-cloud-screenshots/a0ba2fdd-b27d-4e8b-83eb-cf87597b841d.html",
    "status": "ok"
  },
  "searchInformation": {
    "totalResults": "2410000000",
    "timeTaken": 0.58
  },
  "organicResults": [
    {
      "position": 1,
      "title": "Pizza Hut | Delivery & Carryout - No One OutPizzas The Hut!",
      "link": "https://www.pizzahut.com/",
      "displayedLink": "https://www.pizzahut.com",
      "source": "Pizza Hut",
      "snippet": "Discover classic & new menu items, find deals and enjoy seamless ordering for delivery and carryout. No One OutPizzas the Hut®.",
      "sitelinks": {
        "inline": [
          {
            "title": "Deals",
            "link": "https://www.pizzahut.com/deals"
          },
          {
            "title": "Menu",
            "link": "https://www.pizzahut.com/menu"
          },
          {
            "title": "Pizza",
            "link": "https://www.pizzahut.com/menu/pizza"
          },
          {
            "title": "Pizza Hut",
            "link": "https://locations.pizzahut.com/"
          }
        ]
      }
    },
    {
      "position": 8,
      "title": "Order - Austin's Pizza",
      "link": "https://austinspizza.com/order/",
      "displayedLink": "https://austinspizza.com › order",
      "snippet": "Find Your Store ; Austin's Pizza Braker · 10900 Research Blvd, Austin, TX, USA · 512-717-8767 ; Austin's Pizza Four Points · 7301 Ranch Rd 620 N, Austin, TX, USA.",
      "snippetHighlitedWords": [
        "Pizza",
        "Pizza"
      ]
    }
  ],
  "localResults": {
    "places": [
      {
        "position": 1,
        "title": "The Onion",
        "rating": 4.1,
        "reviews": 316,
        "reviewsOriginal": "(316)",
        "price": "$",
        "address": "408 Brazos St",
        "hours": "Closed ⋅ Opens 11 AM",
        "placeId": "12932225639602287481",
        "description": "Tiny pizza joint open late"
      },
      {
        "position": 3,
        "title": "Domino's Pizza",
        "rating": 3.3,
        "reviews": 132,
        "reviewsOriginal": "(132)",
        "price": "$",
        "address": "311 W 5th St",
        "hours": "Closed ⋅ Opens 10 AM",
        "placeId": "12789190097376449679",
        "description": "Longtime pizza chain known for delivery"
      }
    ],
    "moreLocationsLink": "https://www.google.com/search?gl=us&hl=en&tbs=lf:1,lf_ui:9&tbm=lcl&q=pizza&rflfq=1&num=10&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM%3D&sa=X&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQjGp6BAgbEAE"
  },
  "relatedSearches": [
    {
      "query": "best pizza in austin 2023",
      "link": "https://www.google.com/search?gl=us&hl=en&q=Best+pizza+in+Austin+2023&sa=X&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQ1QJ6BAhEEAE"
    },
    {
      "query": "domino's pizza pakistan",
      "link": "https://www.google.com/search?gl=us&hl=en&q=Domino%27s+Pizza+Pakistan&sa=X&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQ1QJ6BAhDEAE"
    }
  ],
  "relatedQuestions": [
    {
      "question": "How many large pizzas do I need for 20 adults?",
      "snippet": "For instance, if you have 20 guests and each typically eats three slices, that would be 60 slices in total. Divide those 60 slices by eight (the number of slices on a large pizza), which gives you 7.5. Therefore, it's best to order eight pizzas to feed your guests sufficiently.",
      "link": "https://mollysmtview.com/pizza/how-many-pizzas-for-20-people#:~:text=For%20instance%2C%20if%20you%20have,to%20feed%20your%20guests%20sufficiently.",
      "title": "How Many Pizzas for 20 People? Guide To Order Pizzas",
      "displayedLink": "https://mollysmtview.com › pizza › how-many-pizzas-fo..."
    },
    {
      "question": "Who sells the most pizza?",
      "snippet": "Domino's is the largest pizza chain in the world in terms of revenue and second in terms of stores opened.",
      "link": "https://www.zippia.com/advice/largest-pizza-chains/#:~:text=Domino's%20is%20the%20largest%20pizza,in%20terms%20of%20stores%20opened.",
      "title": "10 Largest Pizza Chains In The US - Zippia",
      "displayedLink": "https://www.zippia.com › advice › largest-pizza-chains"
    }
  ],
  "knowledgeGraph": {
    "title": "Pizza",
    "type": "Dish",
    "description": "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.",
    "source": {
      "link": "https://en.wikipedia.org/wiki/Pizza",
      "name": "Wikipedia"
    },
    "origin": "Italy",
    "originLinks": [
      {
        "text": "Origin",
        "link": "https://www.google.com/search?gl=us&hl=en&q=pizza+origin&stick=H4sIAAAAAAAAAOPgE-LQz9U3MDMzLtOSySi30k_Oz8lJTS7JzM_TT8kszkgttsovykzPzFvEylOQWVWVqADhAgAjO0XtOQAAAA&sa=X&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQ6BMoAHoECF0QAg"
      },
      {
        "text": "Italy",
        "link": "https://www.google.com/search?gl=us&hl=en&q=Italy&si=ACFMAn86XkhxzOC35jo3k1ec_mUa4PwHgnEtN6tbGWMWaJ9RAuezMmJEG2XjeN3Y9iyCvUc7yZ0Re-6Xdm3xVn0-YU24cEiHGrjbM4k9ewG37NcMbQKmlyQ2G-YimxwtcRZP5qG1s1xSsqniEZK71hQJbfMXsMFgkzidMk_olhEkPk3gMUf8tJ589R0vVgc0S9suo9z8lLGx&sa=X&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQmxMoAXoECF0QAw"
      }
    ],
    "peopleAlsoSearchFor": [
      {
        "name": "Hamburger",
        "link": "https://www.google.com/search?gl=us&hl=en&q=Hamburger&si=ACFMAn86XkhxzOC35jo3k1ec_mUa4PwHgnEtN6tbGWMWaJ9RAt5fAyvrrKxFCF0q1vMrT3gZzBgMK6BkLmtfVGGY99k26-5wi_9gdE6wzmaBooENRRJGhvM-_Rh0m6GvKB0hmbU6wDj9FZfTETcXCgFq0GQ3kwDl0h6Wr2_QTVEDOjESneq_eRNfQIHTJSxIyxoIKltHGWqgTPC7CoXEfm0W_XsCmo65errmu088pPnVy3BtA9Nw5m2D1k6hyRCbplH7RwvK9Ex6f_s6CDjz445rFzml7wFN-aBjv7nBkHfNg09VW50Yslg%3D&sa=X&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQxA16BAhcEAU"
      },
      {
        "name": "Pizza Margherita",
        "link": "https://www.google.com/search?gl=us&hl=en&q=Pizza+Margherita&si=ACFMAn8dOAJGblRJh_rRLqDZ2HbjjZ73N-7Ac_u8QqY4Vde4JK0KWY-c72FymnlG92VPs0WsiiXfIKMMzMkSonRpx7H3ou7WncMS5r8avmm5mqyVQgR89-eiVKyZWov8Lo8pteZ0rntuayCbayoj8UtfxJ3fEslfZ0gsrd5zbAzXlaMgTfL4DAhfI6JkmK2ug5ChnCMIGKyUAU0G5WwYWkHkXPKtxd6PDewDgNEcna35nHAg4Q8_JdAUS4fmDjPqyhT6RSx-VOY5tNKNxDu65W205Oss-3QI2-X9JKi15VTu4oWnaWd7feI%3D&sa=X&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQxA16BAhcEAs"
      }
    ]
  },
  "ads": [
    {
      "position": 1,
      "title": "Order Delivery Or Carryout - Carry Out Delicious Pizza",
      "link": "https://www.google.com/aclk?sa=l&ai=DChcSEwi55fuu-q6AAxWBSXIKHUAkACYYABAjGgJxdQ&sig=AOD64_3eKRnywv0RE4L3DzDIG7jwYkYvSw&q=&ved=2ahUKEwj2v-6u-q6AAxWsD1kFHQ8-CUsQh78CegQIDhAB&adurl=",
      "displayedLink": "https://www.marcos.com/,https://clickserve.dartsearch.net/",
      "trackingLink": "https://www.google.com/aclk?sa=l&ai=DChcSEwi55fuu-q6AAxWBSXIKHUAkACYYABAAGgJxdQ&sig=AOD64_38Cx5w2bcVkQ01L7ib6RISjxm6vQ&q&adurl",
      "description": "Enjoy Pizza Made Fresh, Loaded With All Your Favorite Toppings When You Order From Marcos®. Types: All Meat, Deluxe, Garden, Hawaiian Chicken, Pepperoni..."
    }
  ],
  "pagination": {
    "next": "https://www.google.com/search?q=pizza&gl=us&hl=en&ei=F2zCZLbYJqyf5NoPj_yk2AQ&start=10&sa=N"
  }
}
```
## Error Handling

### Handling API Errors

When making API requests, it's essential to handle potential errors gracefully to ensure smooth execution of your application. The Scrape-it Cloud Google SERP API may return errors for various reasons, such as invalid parameters, rate limiting, or server issues. Here's an example of how to handle API errors in your Node.js code:

```js
const ScrapeitSDK = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const scrapeit = new ScrapeitSDK('INSERT_YOUR_API_KEY_HERE');

  try {
    const response = await scrapeit.scrape({
      "q": "invalid_search_term",
      "num": 10,
      "domain": "google.com"
    });

    console.log(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (error.response) {
      console.error(`Status Code: ${error.response.status}`);
      console.error(`Error Message: ${error.response.data.error}`);
    }
  }
};

main();
```

### Common Error Codes and Meanings

Here are some of the common error codes and their meanings that you may encounter while using the Scrape-it Cloud Google SERP API:

- **400 Bad Request**: The request is invalid or missing required parameters.
- **401 Unauthorized**: Invalid API key or authentication credentials.
- **403 Forbidden**: Your account may not have access to the requested resource.
- **404 Not Found**: The requested resource does not exist.
- **429 Too Many Requests**: Your API usage has exceeded the rate limit. Please wait before making further requests.
- **500 Internal Server Error**: An error occurred on the server. Please try again later.
- **502 Bad Gateway**: The server returned an invalid response.
- **503 Service Unavailable**: The server is currently unavailable. Please try again later.

## Advanced Configuration

### Controlling Result Quantity

You can control the number of results per page using the `num` query parameter. The valid values for `num` range from 10 to 100. By default, the API returns 100 results per page. If you only need a smaller number of results, you can set `num` to a lower value to reduce the response size.

```js
const ScrapeitSDK = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const scrapeit = new ScrapeitSDK('INSERT_YOUR_API_KEY_HERE');

  const query = {
    "q": "your_search_term",
    "num": 20, // Change the value of num to the desired quantity
    "domain": "google.com"
  };

  try {
    const response = await scrapeit.scrape(query);
    console.log(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

main();
```

### Using Different Devices (e.g., Mobile, Desktop)

The Scrape-it Cloud Google SERP API allows you to specify the device type for the search, such as mobile or desktop. By default, the device type is set to "Desktop." If you want to change device while scraping Google Serp, use `deviceType` parameter.

```js
const ScrapeitSDK = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const scrapeit = new ScrapeitSDK('INSERT_YOUR_API_KEY_HERE');

  const query = {
    "q": "your_search_term",
    "num": 10,
    "domain": "google.com",
    "deviceType": "mobile" // Set the device type to "mobile"
  };

  try {
    const response = await scrapeit.scrape(query);
    console.log(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

main();
```

## Best Practices

### Optimizing API Calls

When using the Scrape-it Cloud Google SERP API, consider the following best practices to optimize your API calls:

1. Use specific and relevant search terms to retrieve targeted results.
2. Implement pagination to retrieve large result sets efficiently.
3. Avoid making excessive API calls to stay within your plan's credit limits.

### Dealing with Rate Limits

The Scrape-it Cloud Google SERP API enforces rate limits to prevent abuse and ensure fair usage. If your API usage exceeds the rate limits, you may receive a "429 Too Many Requests" error. To avoid rate limiting, implement proper pagination, and avoid making too many requests within a short period.

### Avoid Overloading the Target Server

Implement rate limiting and use appropriate delays between requests to avoid overwhelming the target server. To minimize the impact on the target server, consider scraping during off-peak hours when website traffic is lower.

## Troubleshooting

If you encounter issues while using the Scrape-it Cloud Google SERP API, consider the following troubleshooting steps:

1. Check your API key and ensure it is correctly passed in the request headers.
2. Verify that your request parameters are valid, especially for required fields.
3. Review the API response and inspect error messages for insights into the issue.
4. Ensure that you are not exceeding your plan's credit limits or rate limits.
