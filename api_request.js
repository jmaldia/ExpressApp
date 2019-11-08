let request = require("request");
let fetch = require("fetch");

request("https://jsonplaceholder.typicode.com/todos/1", (error, response, body) => {
    if (error) {
        console.log(error)
    } else if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body).title);
    };
});

request("https://jsonplaceholder.typicode.com/posts	", (error, response, body) => {
        if (error) {
            console.log(error)
        } else if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body));
        };
    });


// Movie API
// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 
// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 