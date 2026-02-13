const Employee = require("../models/Employee");

// CREATE
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
exports.getEmployee = async (req, res) => {
  const employee = await Employee.find();
  res.json(employee);
};
