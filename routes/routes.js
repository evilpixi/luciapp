const express = require("express")
const router = express.Router()
const passport = require("passport")

// main
router.get("/", (req, res, next) => {
    res.render("home")
})

// login
router.get("/login", (req, res, next)=> {
    res.render("login")
})
router.post("/login", passport.authenticate("local-login", {
    successRedirect: "/profile",
    failureRedirect: "/login"
}))

router.post("/logout", (req, res, next)=> {
    req.logout(()=> {})
    res.redirect("/")
})

// registro
router.get("/register", (req, res)=> {
    res.render("register")
})

router.post("/register", passport.authenticate("local-register", {
    successRedirect: "/register-success",
    failureRedirect: "/register",
    passReqToCallback: true
}))

router.get("/register-success", (req, res)=> {
    res.render("register-success")
})

// user
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}
router.use((req, res, next)=> {
    isAuthenticated(req, res, next)
    next()
})

router.get("/gacha", (req, res, next)=> {
    res.send("gacha!")
})

router.get("/profile", (req, res, next)=> {
    console.log(Object.entries(res.locals))
    res.render("profile", {
        loggedIn: true,
        username: res.locals.username
    })
})


module.exports = router