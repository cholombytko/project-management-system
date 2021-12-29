const { user } = require("../models/model");

exports.getalluser = async (req, res) => {
  try {
    const auser = await user.findAll();
    return res.json(auser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getuser = async (req, res) => {
  try {
    const id = req.params.id;
    const auser = await user.findOne({
      where: {
        id,
      },
    });
    return res.json(auser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const auser = await user.findOne({
      where: {
        id,
      },
    });
    auser.update(req.body);
    auser.save();
    return res.json(auser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const id = req.params.id;
    const auser = await user.destroy({
      where: {
        id,
      },
    });
    return res.json(auser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createuser = async (req, res) => {
  try {
    const auser = await user.create(req.body);

    return res.json(auser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};