const mongoose = require('mongoose');
const {OrderSchema} = require('../schemas/OrderSchema')

  {/* Order model */}
  const OrderModel = mongoose.model('order',OrderSchema);
  module.exports = {OrderModel} 