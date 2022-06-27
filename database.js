const mongoose = require("mongoose")
const { mongodb } = require("./keys")

mongoose.connect(mongodb.URI, {useNewUrlParser: true, dbName:"luciapp"})
.then(db => {
    console.log("DB Connected!")
})
.catch(err => {
    console.log("--> Error Connecting to DB", err)
})