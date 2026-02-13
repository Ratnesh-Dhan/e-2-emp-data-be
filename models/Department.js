const mongoose = require("mongoose");
const Employee = require("./Employee");

const departmentSchema = new mongoose.Schema({
  EmployeeId: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Relationship: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  CompletedAgeInYears: {
    type: String,
  },
  Extra1: {
    type: String,
  },
  Extra2: {
    type: String,
  },
  Extra3: {
    type: String,
  },
  Extra4: {
    type: String,
  },
  Extra5: {
    type: String,
  },
  Handicap: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Department", departmentSchema);
