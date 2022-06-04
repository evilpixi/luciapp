const express = require("express")
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const morgan = require("morgan")
const ejsEngine = require("ejs-mate")
const path = require("path")

const app = express()
require("./database")
require("./passport/local-auth")

// Settings
app.set("views", path.join(__dirname, "views"))
app.engine("ejs", ejsEngine)
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.use(cookieParser("el secreto de lucia"))
app.use(session({
    secret: "el secreto de lucia",
    resave: false,
    saveUninitialized: false
}))

// Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use("/", require("./routes/routes"))

app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), ()=> {console.log("server started on port 3000.")})