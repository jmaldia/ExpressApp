let express= require("express");
let app = express();

// create root route 
app.get("/", (req, res) => {
    // Using inline html
    // res.send("<h1>Welcome to the Home Page</h1><h2>Here we go</h2>");
    // Using EJS and render
    res.render("home.ejs");
});

// ----------------------------
// Using EJS
app.get("/fallinlovewith/:thing", (req, res) => {
    let thing = req.params.thing;
    res.render("love.ejs", { thingVar: thing });
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