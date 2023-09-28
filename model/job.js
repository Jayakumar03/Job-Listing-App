const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "please provide your company name"],
    maxlength: [40, "Name should be of 40 characters"],
  },

  companyLogoURL: {
    type: String,
    required: "URL can't be empty",
  },

  position: {
    type: String,
    required: [true],
  },

  salary: {
    type: Number,
    required: [true],
  },

  jobtype: {
    type: String,
    required: [true],
  },

  workplace: {
    type: String,
  },

  location: {
    type: String,
  },

  jobDescription: {
    type: String,
    required: [true, "please provide job  description"],
  },

  aboutCompany: {
    type: String,
    required: true,
  },

  skillsRequired: {
    type: [String],
    required: true,
  },

  information: {
    type: String,
  },
});

module.exports = mongoose.model("Job", jobSchema);
