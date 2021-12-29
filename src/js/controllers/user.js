const { user } = require("../models/model");

exports.getAllUser = async (req, res) => {
  try {
    const aUser = await user.findAll();
    return res.json(aUser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const aUser = await user.findOne({
      where: {
        id,
      },
    });
    return res.json(aUser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const aUser = await user.findOne({
      where: {
        id,
      },
    });
    aUser.update(req.body);
    aUser.save();
    return res.json(aUser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const aUser = await user.destroy({
      where: {
        id,
      },
    });
    return res.json(aUser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const aUser = await user.create(req.body);

    return res.json(aUser);
  } catch (e) {
    return res.json({ message: e.message });
  }
};