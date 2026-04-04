import Firecrawl from '@mendable/firecrawl-js';

const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_API });


export async function scrapeProduct(url){
try{
  const result = await firecrawl.scrape(url,{
   formats:[
        {
            "type": "json",
            "schema": {
                "type": "object",
                "required": ["productName","currentPrice"],
                "properties": {
                    "productName": {
                        "type": "string"
                    },
                    "currentPrice": {
                        "type": "number"
                    },
                    "currencyCode": {
                        "type": "string"
                    },
                    "productImageUrl": {
                        "type": "string"
                    }
                }
            },
            "prompt": " Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available"
        }
    ]
})
 
const resultData = result.json;
if(!resultData || !resultData.productName){
  throw new Error("No data extracted from URL")
}

return resultData;

}
catch(error){
  console.error("firecrawl scrape error:",error);
  throw new Error(`Failed to scrape product: ${error.message}`)
}
}
