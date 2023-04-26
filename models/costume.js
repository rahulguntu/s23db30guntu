const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
    costume_type: String,
    costume_size: {type:String,length:15},
    costume_cost: {type:Number,min:1000,max:10000}
})
module.exports = mongoose.model("costume",costumeSchema)