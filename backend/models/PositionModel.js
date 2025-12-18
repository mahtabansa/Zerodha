const mongoose  = require('mongoose');
const { PositionSchema } = require('../schemas/PositionSchema');


  {/* Position model */}
  const PositionModel = mongoose.model("position",PositionSchema);
  module.exports = { PositionModel }
