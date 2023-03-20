const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const LocationSchema = new Schema({
     country: String,
     year: Number,
     area : Number,
     population: Number,
})
const Location = model("Location",LocationSchema)

module.exports = {Location}


