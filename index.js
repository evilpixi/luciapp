const express = require('express')
const app = express()

app.set("view engine", "ejs")



app.get("/", (req, res)=> {
    res.send("la app")
})

// game
app.get("/gacha", (req, res)=> {
    res.send("la app")
})

// login
app.get("/login", (req, res)=> {
    // form de login
    res.send("hi")
})

app.post("/login", (req, res)=> {
    res.send("hi")
})

// registro
app.get("/register", (req, res)=> {
    // form de registro
    res.send("hi")
})

app.post("/register", (req, res)=> {
    res.send("hi")
})

app.listen(3000, ()=> {console.log("server started on port 3000.")})