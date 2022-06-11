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
    successRedirect: "/gacha",
    failureRedirect: "/login"
}))

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
router.get("/gacha", (req, res, next)=> {
    if (req.isAuthenticated()) return next()
    res.send("not loged")
}, (req, res)=> {
    res.send("gacha!")
})


module.exports = router