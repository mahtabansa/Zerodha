const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 const OrderSchema = new Schema ({
      name:String,
      qty:Number,
      price:Number,
      mode:String

 })
 module.exports = {OrderSchema}