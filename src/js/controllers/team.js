const { team } = require("../models/model");

exports.getAllTeam = async (req, res) => {
  try {
    const aTeam = await team.findAll();
    return res.json(aTeam);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const aTeam = await team.findOne({
      where: {
        id,
      },
    });
    return res.json(aTeam);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const aTeam = await team.findOne({
      where: {
        id,
      },
    });
    aTeam.update(req.body);
    aTeam.save();
    return res.json(aTeam);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const aTeam = await team.destroy({
      where: {
        id,
      },
    });
    return res.json(aTeam);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createTeam = async (req, res) => {
  try {
    const aTeam = await team.create(req.body);

    return res.json(aTeam);
  } catch (e) {
    return res.json({ message: e.message });
  }
};