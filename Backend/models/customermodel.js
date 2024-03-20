const mongoose = require('mongoose');

// Define the schema for the modal
const customerSchema = new mongoose.Schema({
  _id:{
    type:String,
    required:false
  },
  booking_id:{
    type:String,
    required:false

  },
  customer_name: {
    type: String,
    required: false
  },
  collection_name: {
    type: String,
    required: false
  },
  booking_date: {
    type: Date,
    required: false
  },
  lead_id: {
    type: String,
    required: false
  },
  uhid: {
    type: String,
    required: false
  },
  useruuid: {
    type: String,
    required: false
  },
  test_id: {
    type: String,
    required: false
  },
  test_code: {
    type: String,
    required: false
  },
  test_name: {
    type: String,
    required: false
  },
  test_value: [{
    test_method: String,
    test_parameter_id: Number,
    parameter_name: String,
    parameter_value: String,
    is_highlighted: Boolean,
    lower_bound: String,
    display_value: String,
    upper_bound: String,
    impression: String,
    unit: String,
    other_male_id: String
  }],
  created_at: {
    type: Date,
    default: Date.now,
    required: false
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: false
  },
  
  __hevo_id: {
    type: String,
    required: false
  },
  __hevo__ingested_at: {
    type: Date,
    required: false
  },
  __hevo__loaded_at: {
    type: Date,
    required: false
  },
  __hevo__marked_deleted: {
    type: String,
    required: false
  },
  __hevo__source_modified_at: {
    type: Date,
    required: false
  },
  barcode: {
    type: String,
    required: false
  }
});

// Create the Customer model using the schema
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
