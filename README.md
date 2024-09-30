# Google SERP API

The Google SERP API provides real-time access to structured Google search results, offering no blocks or CAPTCHAs.

## Table of Contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
   - [Obtaining HasData API Key](#obtaining-hasdata-api-key)
   - [Basic Usage Example](#basic-usage-example)
3. [Supported Parameters](#supported-parameters)
   - [Search Query](#search-query)
   - [Location](#location)
   - [Domain](#domain)
   - [Country](#country)
   - [And More...](#and-more)
4. [Response Format](#response-format)
   - [Understanding the JSON Response](#understanding-the-json-response)
   - [Example with keyword: "Coffee"](#example-with-keyword-coffee)
5. [Error Handling](#error-handling)
   - [Handling API Errors](#handling-api-errors)
   - [Common Error Codes and Meanings](#common-error-codes-and-meanings)
6. [Advanced Configuration](#advanced-configuration)
   - [Controlling Result Quantity](#controlling-result-quantity)
   - [Using Different Devices (e.g., Mobile, Desktop)](#using-different-devices-e-g-mobile-desktop)
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

### Obtaining HasData API Key

Signup to HasData to [get your API key](https://app.hasdata.com/sign-up) and some free credits to get started.


### Basic Usage Example

```js
const GoogleSerpApi = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const hasdata = new GoogleSerpApi(process.env.HASDATA_API_KEY || 'INSERT_YOUR_API_KEY_HERE');

  try {
    const response = await hasdata.getSearchResults({
      "q": "Coffee",
      "location": "Austin,Texas,United States",
      "domain": "google.com",
      "gl": "us"
    });

    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

main();
```


## Supported Parameters

### Search Query

| Parameter       | Description                             | Example |
|-----------------|-----------------------------------------|---------|
| q          | **Required**. Specify the search term for which you want to scrape the SERP.     | `q=Coffee` |

### Location

| Parameter       | Description                             | Example |
|-----------------|-----------------------------------------|---------|
| location          | **Optional**. Google canonical location for the search.     | `location=Austin,Texas,United States` |

### Domain

| Parameter       | Description                             | Example |
|-----------------|-----------------------------------------|---------|
| domain          | **Optional**. Google domain to use. Default is google.com.     | `domain=google.com` |

### Country

| Parameter       | Description                             | Example |
|-----------------|-----------------------------------------|---------|
| gl          | **Optional**. The two-letter country code for the country you want to limit the search to.     | `gl=us` |

### And More...

Find the full list of supported parameters on [HasData documentation](https://docs.hasdata.com/google-serp/serp).

## Response Format

The HasData Google SERP API provides a flexible response format based on the type of search query.
The JSON response object may include various properties depending on the specific search query.
Here are the possible properties that can be returned by the API:

- `Ads`: Contains information about advertisements related to the search query..
- `Images Results`: Provides image search results related to the query..
- `Online Related Searches`: Offers online related search suggestions for the query..
- `Online Videos`: Returns online video search results related to the query..
- `Knowledge Graph`: Contains data from the Knowledge Graph for the search query..
- `Local Ads`: Provides local advertisements related to the search query..
- `Local Results`: Contains local search results based on the query..
- `News Results`: Offers news search results related to the query..
- `Organic Results`: Contains organic web search results for the query..
- `Pagination`: Provides information about pagination and navigation through search results..
- `Related Questions`: Contains related questions to the search query..
- `Related Searches`: Provides related search queries to the original query..
- `Search Information`: Contains general information about the search query..
- `Top Stories`: Offers top stories related to the search query..

Please note that not all properties will be present in every API response.
The actual properties returned will vary based on the nature of the search and the availability
of relevant data.

### Example with keyword: "Coffee"

```json
{
  "requestMetadata": {
    "id": "598ff834-f1ae-42fb-9863-2d40e75bfac1",
    "status": "ok",
    "html": "https://storage.googleapis.com/scrapeit-cloud-screenshots/598ff834-f1ae-42fb-9863-2d40e75bfac1.html",
    "url": "https://www.google.com/search?q=Coffee&hl=en&gl=us&num=10&sourceid=chrome&ie=UTF-8"
  },
  "searchInformation": {
    "totalResults": "3280000000",
    "timeTaken": 0.38
  },
  "organicResults": [
    {
      "position": 1,
      "title": "Coffee",
      "link": "https://en.wikipedia.org/wiki/Coffee",
      "displayedLink": "https://en.wikipedia.org › wiki › Coffee",
      "source": "Wikipedia",
      "snippet": "Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due ...",
      "snippetHighlitedWords": [
        "Coffee",
        "coffee",
        "coffee"
      ],
      "sitelinks": {
        "inline": [
          {
            "title": "History",
            "link": "https://en.wikipedia.org/wiki/History_of_coffee"
          },
          {
            "title": "Coffee bean",
            "link": "https://en.wikipedia.org/wiki/Coffee_bean"
          },
          {
            "title": "Coffee preparation",
            "link": "https://en.wikipedia.org/wiki/Coffee_preparation"
          },
          {
            "title": "Coffee production",
            "link": "https://en.wikipedia.org/wiki/Coffee_production"
          }
        ]
      },
      "images": [
        "https://storage.googleapis.com/scrapeit-cloud-screenshots/c7e1df65-c180-40e4-89b9-1edc54b53f21.jpeg"
      ]
    },
    {
      "position": 2,
      "title": "Peet's Coffee | The Original Craft Coffee, Est. 1966",
      "link": "https://www.peets.com/",
      "displayedLink": "https://www.peets.com",
      "source": "Peet's Coffee",
      "snippet": "Since 1966, Peet's Coffee has sourced and offered superior coffees and teas and adhering to strict high-quality and taste standards. Shop today.",
      "snippetHighlitedWords": [
        "Coffee",
        "coffees"
      ],
      "sitelinks": {
        "inline": [
          {
            "title": "Shop All Coffee",
            "link": "https://www.peets.com/collections/all-coffees"
          },
          {
            "title": "Store Locator",
            "link": "https://www.peets.com/pages/store-locator"
          },
          {
            "title": "Peet's Coffeebar Menu",
            "link": "https://www.peets.com/pages/menu"
          },
          {
            "title": "Coffee for Coffee People",
            "link": "https://www.peets.com/pages/coffeepeople"
          }
        ]
      }
    },
    {
      "position": 3,
      "title": "Blue Bottle Coffee | Fresh Roasted Specialty Coffee",
      "link": "https://bluebottlecoffee.com/?srsltid=AfmBOooAzBWgS5UuJcRX8RF77kADgrP_-_q5bZIjiX-c_uQX6xQagJOG",
      "displayedLink": "https://bluebottlecoffee.com",
      "source": "Blue Bottle Coffee",
      "snippet": "Blue Bottle Coffee is a specialty coffee roaster with cafes in LA, SF, NYC, & Japan. Shop our freshly roasted specialty coffee online & in-store.",
      "snippetHighlitedWords": [
        "Coffee",
        "coffee",
        "coffee"
      ],
      "richSnippet": {
        "top": {
          "extensions": [
            "Free 2–6 day delivery over $40",
            "‎30-day returns"
          ]
        }
      },
      "sitelinks": {
        "inline": [
          {
            "title": "Specialty Whole Bean Coffee",
            "link": "https://bluebottlecoffee.com/us/eng/shop/coffee"
          },
          {
            "title": "Browse Our Cafes",
            "link": "https://bluebottlecoffee.com/cafes"
          },
          {
            "title": "Our Coffee",
            "link": "https://bluebottlecoffee.com/us/eng/our-coffee"
          },
          {
            "title": "Blue Bottle Coffee",
            "link": "https://support.bluebottlecoffee.com/hc/en-us"
          }
        ]
      }
    },
    {
      "position": 4,
      "title": "Lofty Coffee Co.| Fresh Roasted Coffee | San Diego",
      "link": "https://loftycoffee.com/",
      "displayedLink": "https://loftycoffee.com",
      "source": "Lofty Coffee",
      "snippet": "Coffee Subscription. You can pick the coffee, quantity and frequency. We roast to order and send you fresh coffee. From the farm to your cup on your schedule.",
      "snippetHighlitedWords": [
        "Coffee",
        "coffee",
        "coffee"
      ]
    },
    {
      "position": 5,
      "title": "Starbucks Coffee Company",
      "link": "https://www.starbucks.com/",
      "displayedLink": "https://www.starbucks.com",
      "source": "Starbucks",
      "snippet": "More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.",
      "snippetHighlitedWords": [
        "coffee"
      ],
      "sitelinks": {
        "inline": [
          {
            "title": "Let's talk coffee",
            "link": "https://www.starbucks.com/coffee/"
          },
          {
            "title": "Store Locator",
            "link": "https://www.starbucks.com/store-locator"
          },
          {
            "title": "Menu",
            "link": "https://www.starbucks.com/menu"
          },
          {
            "title": "Coffee",
            "link": "https://athome.starbucks.com/"
          }
        ]
      }
    },
    {
      "position": 6,
      "title": "The Coffee Bean & Tea Leaf | CBTL",
      "link": "https://coffeebean.com/",
      "displayedLink": "https://coffeebean.com",
      "source": "The Coffee Bean & Tea Leaf",
      "snippet": "We're passionate about delivering the best handcrafted products and take pride in the journey from seed to cup.",
      "sitelinks": {
        "inline": [
          {
            "title": "Coffee",
            "link": "https://www.coffeebean.com/cafe-menu/coffee"
          },
          {
            "title": "Store locator",
            "link": "https://www.coffeebean.com/store-locator"
          },
          {
            "title": "Cafe Menu",
            "link": "https://www.coffeebean.com/cafe-menu"
          },
          {
            "title": "Ground Coffee",
            "link": "https://store.coffeebean.com/collections/ground-coffee"
          }
        ]
      }
    },
    {
      "position": 7,
      "title": "What is Coffee?",
      "link": "https://www.ncausa.org/About-Coffee/What-is-Coffee",
      "displayedLink": "https://www.ncausa.org › About Coffee",
      "source": "National Coffee Association",
      "snippet": "Coffee traces its origin to a genus of plants known as Coffea. Within the genus there are over 500 genera and 6,000 species of tropical trees and shrubs.",
      "snippetHighlitedWords": [
        "Coffee"
      ]
    },
    {
      "position": 8,
      "title": "Coffee | Origin, Types, Uses, History, & Facts",
      "link": "https://www.britannica.com/topic/coffee",
      "displayedLink": "https://www.britannica.com › ... › Food",
      "source": "Britannica",
      "snippet": "Sep 17, 2024 — Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.",
      "snippetHighlitedWords": [
        "Coffee",
        "coffee"
      ],
      "sitelinks": {
        "inline": [
          {
            "title": "History of coffee",
            "link": "https://www.britannica.com/topic/history-of-coffee"
          },
          {
            "title": "Using coffee",
            "link": "https://www.britannica.com/topic/coffee/Using-coffee"
          },
          {
            "title": "Decaffeinated coffee",
            "link": "https://www.britannica.com/topic/decaffeinated-coffee"
          },
          {
            "title": "Cold-brew coffee",
            "link": "https://www.britannica.com/topic/cold-brew-coffee"
          }
        ]
      }
    }
  ],
  "localResults": {
    "places": [
      {
        "position": 1,
        "title": "Java Joe's",
        "rating": 4.4,
        "reviews": 24,
        "reviewsOriginal": "(24)",
        "address": "1760 Adams Ave",
        "hours": "Closed ⋅ Opens 7 AM",
        "placeId": "15250105347279422150",
        "description": "\"Coffee was good.\""
      },
      {
        "position": 2,
        "title": "The Old Village Roaster",
        "rating": 4.9,
        "reviews": 119,
        "reviewsOriginal": "(119)",
        "address": "919 4th Ave",
        "hours": "Closed ⋅ Opens 6:30 AM",
        "placeId": "4683147543477795291",
        "description": "\"Delicious coffee, amazing customer service and great prices.\""
      },
      {
        "position": 3,
        "title": "Grindstone Coffeeology",
        "rating": 4.8,
        "reviews": 310,
        "reviewsOriginal": "(310)",
        "address": "816 8th St",
        "hours": "Closed ⋅ Opens 6:30 AM",
        "placeId": "3057026700123595406",
        "description": "\"Amazing coffee, pleasant staff, quick service, and they have a drive thru.\""
      }
    ],
    "moreLocationsLink": "https://www.google.com/search?sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&tbs=lf:1,lf_ui:9&tbm=lcl&q=Coffee&rflfq=1&num=10&sa=X&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQjGp6BAglEAE"
  },
  "relatedQuestions": [
    {
      "question": "What ingredients does coffee contain?",
      "snippet": "Coffee beans contain a variety of carbohydrates, accounting for 60% of the total weight of raw coffee beans. There are also some proteins, fats, tannins, caffeine, minerals, and other trace ingredients. Variety, origin, and harvest season will affect the composition of these ingredients.",
      "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8704863/#:~:text=Coffee%20beans%20contain%20a%20variety,the%20composition%20of%20these%20ingredients.",
      "title": "Relationship between the Chemical Composition and the Biological ...",
      "displayedLink": "https://www.ncbi.nlm.nih.gov › articles › PMC8704863"
    },
    {
      "question": "What is the nickname of coffee?",
      "snippet": "From there it evolved into “cup of Joe.” There also the theory that since coffee took on the nickname because it was the drink of the common man, the common Joe.",
      "link": "https://hawleysilkmill.com/blog/why-is-coffee-called-joe-inquiring-minds-want-to-know/#:~:text=From%20there%20it%20evolved%20into,common%20man%2C%20the%20common%20Joe.",
      "title": "Why is Coffee Called Joe? Inquiring Minds Want to Know!",
      "displayedLink": "https://hawleysilkmill.com › blog › why-is-coffee-called-..."
    },
    {
      "question": "How to make a perfect coffee?",
      "snippet": "Add a teaspoon of NESCAFÉ Instant Coffee to your cup. If you like sugar you can add it now. Carefully pour the hot water into the cup, leaving some space at the top. Stir it well to ensure the coffee and the sugar are fully dissolved - this will only take about 10 seconds.",
      "link": "https://www.nescafe.com/mena/en-ae/coffee-culture/knowledge/make-perfect-coffee#:~:text=Add%20a%20teaspoon%20of%20NESCAF%C3%89,you%20can%20add%20it%20now.&text=Carefully%20pour%20the%20hot%20water,only%20take%20about%2010%20seconds.",
      "title": "How to Make the Perfect Coffee at Home | Nescafé | MENA",
      "displayedLink": "https://www.nescafe.com › coffee-culture › knowledge"
    },
    {
      "question": "How many types of coffee are there in the world?",
      "snippet": "How many coffee types exist? There are over 30 combinations of coffee types in the world. We've put together some of our favourite coffee types for you to try at home - easy recipes with NESCAFÉ® instant coffee as the starting point.",
      "link": "https://www.nescafe.com/in/coffee-types#:~:text=How%20many%20coffee%20types%20exist,coffee%20as%20the%20starting%20point.",
      "title": "Different Types of Coffee Explained | NESCAFÉ India",
      "displayedLink": "https://www.nescafe.com › coffee-types"
    }
  ],
  "imagesResults": [
    {
      "position": 1,
      "title": "Coffee - Wikipedia",
      "link": "https://en.wikipedia.org/wiki/Coffee",
      "source": "Wikipedia",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZTLx2ZnPg9Dd3HBYDWWVmZG_u2bSt-AwFw&s",
      "original": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/1200px-Latte_and_dark_coffee.jpg",
      "originalWidth": 1200,
      "originalHeight": 750
    },
    {
      "position": 2,
      "title": "Coffee bean - Wikipedia",
      "link": "https://en.wikipedia.org/wiki/Coffee_bean",
      "source": "Wikipedia",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0a-3uyQ9B4bVyJmbPEeawulA4SLxp7f2cXA&s",
      "original": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg",
      "originalWidth": 1200,
      "originalHeight": 900
    },
    {
      "position": 3,
      "title": "How to Make Black Coffee that Tastes Good",
      "link": "https://somedayilllearn.com/how-to-make-black-coffee/",
      "source": "Someday I'll Learn",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOfFc4HJPtdd_ukR9cGukGp4kg7J-4z2HTQ&s",
      "original": "https://somedayilllearn.com/wp-content/uploads/2020/05/cup-of-black-coffee-scaled-720x540.jpeg",
      "originalWidth": 720,
      "originalHeight": 540
    },
    {
      "position": 4,
      "title": "Coffee recipes | Good Food",
      "link": "https://www.bbcgoodfood.com/recipes/collection/coffee-recipes",
      "source": "BBC Good Food",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZoe4singAQUmFXw2NBvG1P_DailrK514QQ&s",
      "original": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
      "originalWidth": 500,
      "originalHeight": 454
    },
    {
      "position": 5,
      "title": "Easy Iced Coffee",
      "link": "https://www.allrecipes.com/recipe/21667/easy-iced-coffee/",
      "source": "Allrecipes",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVYAb9l2oOQ4iRwqARLLwHoTuyZgY9RKT0Q&s",
      "original": "https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg",
      "originalWidth": 1500,
      "originalHeight": 1125
    },
    {
      "position": 6,
      "title": "Coffee health benefits: Diabetes, heart health, liver cancer ...",
      "link": "https://www.medicalnewstoday.com/articles/270202",
      "source": "MedicalNewsToday",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLC4YTBI7Prca9lisLFEhhWjbVUbP7j4Xcg&s",
      "original": "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/270202_2200-800x1200.jpg",
      "originalWidth": 800,
      "originalHeight": 1200
    },
    {
      "position": 7,
      "title": "How to Make the Perfect Coffee at Home | Nescafé | MENA",
      "link": "https://www.nescafe.com/mena/en-ae/coffee-culture/knowledge/make-perfect-coffee",
      "source": "www.nescafe.com",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fTNEi4JBvs4zsytPeu83uLshR_E6G0TVxw&s",
      "original": "https://www.nescafe.com/mena/sites/default/files/2023-07/Nescafe%20Classic%20red%20mug%20with%20black%20coffee%20and%20steam.jpg",
      "originalWidth": 1600,
      "originalHeight": 400
    },
    {
      "position": 8,
      "title": "Different Types of Coffee Explained | NESCAFÉ India",
      "link": "https://www.nescafe.com/in/coffee-types",
      "source": "www.nescafe.com",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zz48uPFxRe2DU5tk0hwH6XlwmX5PIZAyYQ&s",
      "original": "https://www.nescafe.com/in/sites/default/files/coffee-types-banner-desktop_0.jpg",
      "originalWidth": 1280,
      "originalHeight": 400
    }
  ],
  "immersiveProducts": [
    {
      "position": 1,
      "category": "Popular products",
      "title": "Folgers Classic Roast Ground Coffee",
      "price": "$5.42",
      "extractedPrice": 5.42,
      "source": "Walmart"
    },
    {
      "position": 2,
      "category": "Popular products",
      "title": "Chock Full O'Nuts Original Ground Coffee",
      "price": "$10.92",
      "extractedPrice": 10.92,
      "source": "Amazon"
    },
    {
      "position": 3,
      "category": "Popular products",
      "title": "Ground Bones Coffee 5 Bag Sample Pack",
      "price": "$33.00",
      "extractedPrice": 33,
      "source": "Bones Coffee Company",
      "delivery": "Free $75+"
    },
    {
      "position": 4,
      "category": "Popular products",
      "title": "Black Rifle Coffee Company Freedom Fuel Coffee",
      "price": "$15.99",
      "extractedPrice": 15.99,
      "source": "Black Rifle Coffee Company"
    },
    {
      "position": 5,
      "category": "Popular products",
      "title": "Cafe Bustelo Coffee Espresso",
      "price": "$6.49",
      "extractedPrice": 6.49,
      "source": "cafebustelo.com"
    },
    {
      "position": 6,
      "category": "Popular products",
      "title": "Starbucks Coffee Pike Place Roast",
      "price": "$8.48",
      "extractedPrice": 8.48,
      "source": "Walmart"
    },
    {
      "position": 7,
      "category": "Popular products",
      "title": "Cafe Du Monde Coffee Chicory",
      "price": "$9.49",
      "extractedPrice": 9.49,
      "source": "Amazon.com"
    },
    {
      "position": 8,
      "category": "Popular products",
      "title": "Bones Coffee Company Bikini Bottom Brew Ground Coffee Beans",
      "price": "$17.99",
      "extractedPrice": 17.99,
      "source": "Bones Coffee Company",
      "delivery": "Free $75+"
    }
  ],
  "pagination": {
    "next": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=10&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8NMDegQIBRAW",
    "pages": [
      {
        "2": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=10&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAE"
      },
      {
        "3": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=20&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAG"
      },
      {
        "4": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=30&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAI"
      },
      {
        "5": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=40&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAK"
      },
      {
        "6": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=50&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAM"
      },
      {
        "7": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=60&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAO"
      },
      {
        "8": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=70&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAQ"
      },
      {
        "9": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=80&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAS"
      },
      {
        "10": "https://www.google.com/search?q=Coffee&sca_esv=518c046ebb1e337c&sca_upv=1&hl=en&gl=us&ei=dF76ZoisEoms5NoPytClgAE&start=90&sa=N&sstk=Aagrsug5__22q9S_8zm5ivYZ7AeewZ0A2-fWxLiNcejhLb3BGc8zuVbWZ7ZuqcT2OQhIRCvYjbdBFkP1dFOlFIn3MQldGY59-7EV9w&ved=2ahUKEwiItoieneqIAxUJFlkFHUpoCRAQ8tMDegQIBRAU"
      }
    ]
  }
}
```

## Error Handling

### Handling API Errors

When making API requests, it's essential to handle potential errors gracefully to ensure smooth
execution of your application. The HasData Google SERP API may return errors for various
reasons, such as invalid parameters, rate limiting, or server issues. Here's an example of how
to handle API errors in your Node.js code:

```js
const GoogleSerpApi = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const hasdata = new GoogleSerpApi(process.env.HASDATA_API_KEY || 'INSERT_YOUR_API_KEY_HERE');

  try {
    const response = await hasdata.getSearchResults({
      "q": "Coffee",
      "location": "Austin,Texas,United States",
      "domain": "google.com",
      "gl": "us"
    });

    console.log(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (error.response) {
      console.error(`Status Code: ${ error.response.status }`);
      console.error(`Error Message: ${ error.response.data.error }`);
    }
  }
};

main();
```

### Common Error Codes and Meanings

Here are some of the common error codes and their meanings that you may encounter while using the HasData Google SERP API:

- **200 OK**: Successfully retrieved search results.
- **400 Bad Request**: Bad request. Possible issues include missing or invalid parameters.
- **401 Unauthorized**: Unauthorized. API key is missing or invalid.
- **403 Forbidden**: Forbidden. The API key does not have the necessary permissions or has exceeded its usage limits.
- **422 Unprocessable Entity**: Too Many Requests. You are sending requests too fast, and exceeding your concurrency limit.
- **500 Internal Server Error**: Internal Server Error. An error occurred on the server side.



## Advanced Configuration

### Controlling Result Quantity

You can control the number of results per page using the `num` query parameter. The valid values for `num` range from 10 to 100. By default, the API returns 100 results per page. If you only need a smaller number of results, you can set `num` to a lower value to reduce the response size.

```js
const GoogleSerpApi = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const hasdata = new GoogleSerpApi(process.env.HASDATA_API_KEY || 'INSERT_YOUR_API_KEY_HERE');

  try {
    const response = await hasdata.getSearchResults({
      "q": "Coffee",
      "location": "Austin,Texas,United States",
      "domain": "google.com",
      "gl": "us"
      "num": 20, // Change the value of num to the desired quantity
    });

    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

main();
```


### Using Different Devices (e.g., Mobile, Desktop)

The Scrape-it Cloud Google SERP API allows you to specify the device type for the search, such as mobile or desktop. By default, the device type is set to "Desktop." If you want to change device while scraping Google Serp, use `deviceType` parameter.

```js
const GoogleSerpApi = require('@scrapeit-cloud/google-serp-api');

const main = async () => {
  const hasdata = new GoogleSerpApi(process.env.HASDATA_API_KEY || 'INSERT_YOUR_API_KEY_HERE');

  try {
    const response = await hasdata.getSearchResults({
      "q": "Coffee",
      "location": "Austin,Texas,United States",
      "domain": "google.com",
      "gl": "us"
      "deviceType": "mobile" // Set the device type to "mobile"
    });

    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

main();
```



## Best Practices

### Optimizing API Calls

When using the HasData Google SERP API, consider the following best practices to optimize your API calls:

1. Use specific and relevant search terms to retrieve targeted results.
2. Implement pagination to retrieve large result sets efficiently.
3. Avoid making excessive API calls to stay within your plan's credit limits.

### Dealing with Rate Limits

The HasData Google SERP API enforces rate limits to prevent abuse and ensure fair usage. If your API usage
exceeds the rate limits, you may receive a "429 Too Many Requests" error. To avoid rate limiting,
implement proper pagination, and avoid making too many requests within a short period.

### Avoid Overloading the Target Server

Implement rate limiting and use appropriate delays between requests to avoid overwhelming
the target server. To minimize the impact on the target server, consider scraping during
off-peak hours when website traffic is lower.

## Troubleshooting

If you encounter issues while using the HasData Google SERP API, consider the following troubleshooting steps:

1. Check your API key and ensure it is correctly passed in the request headers.
2. Verify that your request parameters are valid, especially for required fields.
3. Review the API response and inspect error messages for insights into the issue.
4. Ensure that you are not exceeding your plan's credit limits or rate limits.
