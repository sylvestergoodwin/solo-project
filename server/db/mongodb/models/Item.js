// Require mongoose
var mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

// Create item schema
var ItemSchema = new Schema({
  // title is a required string
  item_id: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  description: {
	  type: String,
	  required: true
  },
  keywords: {
    type: Array,
    "default": [] 
  }
});

// Create the Item model with the ItemSchema
var Item = mongoose.model("Item", ItemSchema);

// Export the model
module.exports = Item;
