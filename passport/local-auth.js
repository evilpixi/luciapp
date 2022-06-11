const passport = require("passport")
const user = require("../models/user")
const LocalStrategy = require("passport-local").Strategy

const User = require("../models/user")

passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
})

passport.use("local-register", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done) => {
    let existingUser = {}
    let message = ""

    existingUser = await User.findOne({email: req.body.email})
    if (existingUser) {
        message = "Email Already Exists."
        console.log("ERROR", message)
        return done(null, false, req.flash("registerMessage", message))
    }

    existingUser = await User.findOne({username: username})
    if (existingUser) {
        message = "Username Already Exists."
        console.log("ERROR", message)
        return done(null, false, req.flash("registerMessage", message))
    }

    const newUser = new User()
    newUser.username = username
    newUser.password = newUser.encryptPassword(password)
    newUser.email = req.body.email

    console.log("User Registered!:", newUser)
    await newUser.save()
    done(null, newUser)
}))

passport.use("local-login", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done)=> {
    let existingUser = await User.findOne({username: username})
    let message = ""

    if (!existingUser) {
        message = "User not found."
        console.log("ERROR", message)
        return done(null, false, req.flash("loginMessage", message))
    }

    console.log(existingUser)
    /*if (!existingUser.comparePassword(password)) {
        message = "Incorrect Password."
        console.log("ERROR", message)
        return done(null, false, req.flash("loginMessage", message))
    }*/

    done(null, existingUser)
}))