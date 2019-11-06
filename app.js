let express= require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Hi there bro!");
});

app.get("/bye", (req, res) => {
    res.send("Bye bro!");
});

app.get("/dog", (req, res) => {
    res.send("Bow wow!");
});


// Tell express to listen forrequests -start server 
// start your app with this command: PORT=3000 node app.js
app.listen(process.env.PORT, process.env.IP, () =>{
    console.log("Server has started")
});
