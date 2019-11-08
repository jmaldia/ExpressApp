let express= require("express");
let app = express();
let bodyParser = require("body-parser"); // used to get the body of a post
let request = require("request");
// tells express to serve up the directory
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// create root route 
app.get("/", (req, res) => {
    // Using inline html
    // res.send("<h1>Welcome to the Home Page</h1><h2>Here we go</h2>");
    // Using EJS and render
    res.render("home");
});

// ----------------------------
// Using EJS
app.get("/fallinlovewith/:thing", (req, res) => {
    let thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

let posts = [
    { title: "Post 1", author: "Susy" },
    { title: "My Pet Bunny", author: "Charlie" },
    { title: "Can you believe this?", author: "Colt" }
];

request("https://jsonplaceholder.typicode.com/posts	", (error, response, body) => {
    let postsData;
    
    if (error) {
        console.log(error)
    } else if (!error && response.statusCode === 200) {
        postsData = JSON.parse(body);
    };

    postsData.forEach(post => {
        posts.push({ title: post.title, author: post.userId }); 
    });
});
    
// route for posts
app.get("/posts", (req, res) => {
    res.render("posts", { posts: posts });
});

// post route
app.post("/addPost", (req, res) => {
    let newpost = req.body.newpost;
    let author = req.body.author;
    
    posts.push({ title: newpost, author: author }); 

    res.redirect("/posts");
});

// ----------------------------
// create bye route 
app.get("/bye", (req, res) => {
    res.send("Bye bro!");
});
// create speak route
app.get("/speak/:animal", (req, res) => {
    let sounds = {
        pig: "Oink", 
        cow: "Moo", 
        dog: "Woof Woof", 
        cat: "#^(&#%(@*", 
        goldfish: "Glug glug"
    }
    let animal = req.params.animal.toLowerCase(); 
    let sound = sounds[animal];

    res.send(`The ${animal} says '${sound}'`);
});
// using route parameters
// follows a pattern
app.get("/repeat/:word/:count", (req, res) => {
    let word = req.params.word;
    let count = req.params.count;
    let repeat = "";

    for (let i = 0; i < count; i++) {
        repeat += `${word} `;
    }
    
    res.send(repeat.trim());
});

// ---------------
// MOVIE ROUTES
// ---------------
app.get("/movies", (req, res) => {
    request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", (error, response, body) => {
        if (error) {
            console.log(error)
        } else if (!error && response.statusCode === 200) {
            movieData = JSON.parse(body).Search;
            console.log(movieData);
            res.render("movies", { movies: movieData });
        };
    });
});


// create star route - a catch all 
// order of routes matter
// the routes that first matches will be executed
app.get("*", (req, res) => {
    res.send("Sorry, that page was not found");
});

// Tell express to listen for requests -start server 
// start your app with this command: PORT=3000 node app.js
app.listen(process.env.PORT, process.env.IP, () =>{
    console.log("Server has started")
});