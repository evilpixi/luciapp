const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

passport.serializeUser((user, done) => {
    done(null, 0)
})
passport.deserializeUser(async (id, done) => {
    const user = await {username: "tati", password: "asdxd", email: "tati@asd.com"}
    done(null, user)
})

passport.use("local-login", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done)=> {
    let existingUser = {username: "tati", password: "asdxd", email: "tati@asd.com"}
    done(null, existingUser)
}))