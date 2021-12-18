const memberController = require("../controllers/memberController");

const routes = [
  { path: "/members/create", method: "post", func: memberController.createMember },
  { path: "/members/read/:id", method: "get", func: memberController.receiveMemberById },
  { path: "/members/update/", method: "put", func: memberController.updateMember },
  { path: "/members/delete/:id", method: "delete", func: memberController.removeMemberById },
  { path: "/members/list", method: "get", func: memberController.receiveAllMembers },
];

module.exports = routes;