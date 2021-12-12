const { append } = require('express/lib/response');
var request = require('request');
let searchItem = 'Bacterial pneumonia';
const app

var headers = {
    'accept': 'application/json',
    'API-Version': 'v2',
    'Accept-Language': 'en',
};


var searchDisease = {
    url: `https://id.who.int/icd/entity/search?q=${searchItem}`,
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        let entity = JSON.parse(body);
        let des = entity.destinationEntities;
        let defReq = des[0].id;
        console.log(des[0].id);

        var searchDef = {
            url: defReq,
            headers: headers
        }

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(searchItem);
                let newEnt = JSON.parse(body);

                console.log("\tDefinition: " + newEnt.definition[`@value`])
                console.log()
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
