const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const enquiryModel = mongoose.model("Enquiry", enquirySchema);

module.exports = { enquiryModel };
