const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema.js");

const HoldingsModel = new model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };
