
import {model, Schema}from "mongoose";

const LocationSchema = new Schema({
     Country: String,
     Year: Number,
     Area : Number,
     Population: Number,
})
export const Location = model("Location",LocationSchema)


