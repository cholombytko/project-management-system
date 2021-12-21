const task = require("../models/task.js");

exports.getAllTask = async (req, res) => {
  try {
    const aTask = await task.findAll();
    return res.json(aTask);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const aTask = await task.findOne({
      where: { id }
    });
    return res.json(aTask);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const aTask = await task.findOne({
      where: { id }
    });
    aTask.update(req.body);
    aTask.save();
    return res.json(aTask);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const aTask = await task.destroy({
      where: { id }
    });
    return res.json(aTask);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const aTask = await task.create(req.body);

    return res.json(aTask);
  } catch (e) {
    return res.json({ message: e.message });
  }
};