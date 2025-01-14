const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home");
});

app.get("/about", (req, res) => {
    res.send("<h3>this is about page</h3>");
});

app.get("/ig/:username", (req, res) => {
    // let followers = ["Kiran", "Puja", "Monika", "Kavita"];
    // let {username} = req.params;
    // console.log(username);
    // res.render("instagram.ejs", {username, followers});
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data) {
        res.render("instagram.ejs", {data} );
    }else{
        res.render("error.ejs" );
    }
    
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs", {num: diceVal});
    res.render("rolldice.ejs", {diceVal});
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
    
});