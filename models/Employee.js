const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  EmployeeID: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  Section: {
    type: String,
  },
});
module.exports = mongoose.model("Employee", employeeSchema);

// {
//     "DOB": "1998-12-25"
//   }
