const mongoose = require('mongoose')
const {HoldingSchema} = require('../schemas/HoldingSchema');

const holdingModel = mongoose.model('holding',HoldingSchema);
module.exports={holdingModel};
