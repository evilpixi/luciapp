const mongoose = require("mongoose")
const bcrypt = require("bcrypt-nodejs")
const { Schema } = mongoose
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
    username: String,
    password: String,
    email: String
})

//userSchema.plugin(passportLocalMongoose)

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

userSchema.methods.comparePassword = (user, password) => {
    return bcrypt.compare(password, user.password)
}

module.exports = mongoose.model("users", userSchema)