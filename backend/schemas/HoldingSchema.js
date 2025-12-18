const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const HoldingSchema = new Schema({
            name:String,
            qty:Number,
            avg:Number,
            price:Number,
            net:String,
            day:String,
            
})

// const holdingModel = mongoose.model("holding",);
module.exports = {HoldingSchema};
