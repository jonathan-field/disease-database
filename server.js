var request = require('request');
require("dotenv").config();

var headers = {
    'accept': 'application/json',
    'API-Version': 'v2',
    'Accept-Language': 'en',
    'Authorization': `Bearer ${process.env.token}`,
    // the above token has to be refreshed manual every hour using swagger
    // input client credentials from https://icd.who.int/icdapi/Account/AccessKey
    // into swagger https://id.who.int/swagger/index.html
    // run one of the commands (version: v2, language: en) and get the bearer token from the curl command
    // throw it into your own .env file
};

let searchItem = 'Bacterial pneumonia';
var searchDisease = {
    url: `https://id.who.int/icd/entity/search?q=${searchItem}`,
    headers: headers
};

// see if the disease exists in our database
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        let entity = JSON.parse(body);
        let des = entity.destinationEntities;
        let defReq = des[0].id;
        console.log(des[0].id);
        //console.log(body);

        var searchDef = {
            url: defReq,
            headers: headers
        }
        // let's get the definition of the disease
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(searchItem);
                let newEnt = JSON.parse(body);
                console.log(body)
                console.log("\tDefinition: " + newEnt.definition[`@value`])
                console.log(body)
            }
            else{
                console.log("Unable to get definition");
            }
        }
        request(searchDef, callback);


    }
    else{
        console.log("Error, no information available about disease.");
    }
}

request(searchDisease, callback);
