const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Establish connection to DBZ!"))
    .catch( err => ("Something went wrong when connecting to the database", err))

    require("../models/Author")