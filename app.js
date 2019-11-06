let express= require("express");
let app = express();

// create root route 
app.get("/", (req, res) => {
    res.send("Hi there welcome to my assignment");
});
// create bye route 
app.get("/bye", (req, res) => {
    res.send("Bye bro!");
});
// create speak route
app.get("/speak/:animal", (req, res) => {
    let animal = req.params.animal;

    let phrase = (animal, sound) => {
        return `The ${animal} says '${sound}'`
    }

    if (animal === "pig") {
        res.send(phrase(animal, 'Oink'));
    } else if (animal === "cow") {
        res.send(phrase(animal, 'Moo'));
    } else if (animal === "dog") {
        res.send(phrase(animal, 'Woof Woof'));
    } else {
        res.send("Sorry, I don't know that animal");
    }
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