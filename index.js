'use strict'

const express = require("express")
const webpack = require("webpack")
const webpackDev = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")
const path = require("path")
const morgan = require("morgan")
/*const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const ejsEngine = require("ejs-mate")
const flash = require("connect-flash")*/

const app = express()
/*require("./database")
require("./passport/local-auth")*/
//require("./passport/yes-auth")

// Settings
/*app.set("views", path.join(__dirname, "views"))
app.engine("ejs", ejsEngine)
app.set("view engine", "ejs")*/
app.use(express.static(path.join(__dirname, "public")))

/*app.use(cookieParser("el secreto de lucia"))
app.use(session({
    secret: "el secreto de lucia",
    resave: false,
    saveUninitialized: false
}))*/

// Middlewares
app.use(morgan("dev"))
/*app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())*/
//app.use(webpackDev(webpack(webpackConfig)))

/*app.use((req, res, next)=> {
    app.locals.registerMessage = req.flash("registerMessage")
    app.locals.loginMessage = req.flash("loginMessage")
    next()
})*/

// Routes
app.use("/", require("./routes/routes"))

app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), ()=> {
    console.clear()
    console.log("+------------------------------+")
    console.log("| server started on port 3000. |")
    console.log("+------------------------------+")
})