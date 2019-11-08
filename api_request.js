let request = require("request");

request("https://jsonplaceholder.typicode.com/posts	", (error, response, body) => {
    if (error) {
        console.log(error)
    } else if (!error && response.statusCode === 200) {
        // console.log(JSON.parse(body));
    };
});