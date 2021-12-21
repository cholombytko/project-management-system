const { member } = require("../models/model");

exports.getAllMember = async (req, res) => {
  try {
    const aMember = await member.findAll();
    return res.json(aMember);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getMember = async (req, res) => {
  try {
    const id = req.params.id;
    const aMember = await member.findOne({
      where: {
        id,
      },
    });
    return res.json(aMember);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const id = req.params.id;
    const aMember = await member.findOne({
      where: {
        id,
      },
    });
    aMember.update(req.body);
    aMember.save();
    return res.json(aMember);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const id = req.params.id;
    const aMember = await member.destroy({
      where: {
        id,
      },
    });
    return res.json(aMember);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createMember = async (req, res) => {
  try {
    const aMember = await member.create(req.body);

    return res.json(aMember);
  } catch (e) {
    return res.json({ message: e.message });
  }
};