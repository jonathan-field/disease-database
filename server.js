const { append } = require('express/lib/response');
var request = require('request');
let searchItem = 'Bacterial pneumonia';
const app

var headers = {
    'accept': 'application/json',
    'API-Version': 'v2',
    'Accept-Language': 'en',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzkyNjEwODIsImV4cCI6MTYzOTI2NDY4MiwiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjQ5YTRiMWVjLTNiMzYtNDU4Ni04NWU3LTU1M2IwMGU0NjY3N18zOGY2NzVhMy0xNGIwLTQ3NmEtOWE0My1jYzA1MzBiMDA3MDEiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.kRvZAD4iSqac2gjJRDOQYpuaHV_9V4etGZLDOQ_GghDvYwxYGzYTw6f_elYRwhwgPHvZxG440fmc_Qc5GAZ8ivWahahKIH0-L2f3rcV3X5wOirYtk2flMci_-icB2C1vyYWw1zJc3_A4LH3vfilCmZ9IZ6ZRELam7EGuRDHHtrotKNomjD9M2dy1eGk0TSle5WDnLQlI6sYLiY-eMY3efTVQC7RUIA3S700yUQDIX_YNdv0nGzKVfjSRsEnGu8fKupWeibfk-DntrJDAxVskvfH3zWH7IUDI5LMFk7H4JqsZtKf7m8KB3C1OT6RXcCsf_zc52HMxYniaJmZtd8TeaQ'
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
