const _DataTypes = require("sequelize").DataTypes;
const _actionlog = require("./actionlog");
const _actiontype = require("./actiontype");
const _artefact = require("./artefact");
const _assignment = require("./assignment");
const _association = require("./association");
const _grant = require("./grant");
const _member = require("./member")
const _project = require("./project");
const _role = require("./role");
const _task = require("./task");
const _team = require("./team");
const _user = require("./user");

function initModels(sequelize) {
  const actionlog = _action(sequelize, DataTypes);
  const actiontype = _actiontype(sequelize, DataTypes);
  const artefact = _artefact(sequelize, DataTypes);
  const assignment = _assignment(sequelize, DataTypes);
  const association = _association(sequelize, DataTypes);
  const grant = _grant(sequelize, DataTypes);
  const member = _member(sequelize, DataTypes);
  const project = _project(sequelize, DataTypes);
  const role = _role(sequelize, DataTypes);
  const task = _task(sequelize, DataTypes);
  const team = _team(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);


  // user relations
  user.hasMany(member, {
    as: "members",
    foreignKey: "user"
  })

  // member relations

  member.belongsTo(user, {
    as: "member_member",
    foreignKey: "user"
  })
  member.belongsTo(team, {
    as: "team_member",
    foreignKey: "team"
  })
  member.hasMany(assignment, {
    as: "assignments",
    foreignKey: "member"
  })
  member.hasMany(grant, {
    as: "grants",
    foreignKey: "member"
  })

  // team relations

  team.hasMany(member, {
    as: "members",
    foreignKey: "team"
  })
  team.hasMany(project, {
    as: "projects",
    foreignKey: "team"
  })

  // project relations

  project.belongsTo(team, {
    as: "projects",
    foreignKey: "team"
  })
  project.hasMany(task, {
    as: "tasks",
    foreignKey: "project"
  })

  // task relations

  task.belongsTo(project, {
    as: "tasks",
    foreignKey: "project"
  })
  task.hasMany(grant, {
    as: "tasks",
    foreignKey: "grant"
  })
  task.hasMany(association, {
    as: "tasks",
    foreignKey: "association"
  })

  // association relations
  
  association.belongsTo(task, {
    as: "task_association",
    foreignKey: "task"
  })
  association.belongsTo(artefact, {
    as: "artefact_association",
    foreignKey: "artefact"
  })

  // artefact relations

  artefact.hasMany(association, {
    as: "artefacts",
    foreignKey: "association"
  })
  artefact.hasMany(grant: {
    as: "artefacts",
    foreignKey: "grant"
  })

  // grant relations

  grant.belongsTo(artefact, {
    as: "artefact_grant",
    foreignKey: "artefact"
  })
  grant.belongsTo(member, {
    as: "member_grant",
    foreignKey: "member"
  })
  grant.belongsTo(actiontype, {
    as: "actiontype_grant",
    foreignKey: "actiontype"
  })
  grant.belongsTo(actionlog, {
    as: "grants",
    foreignKey: "actionlog"
  })
  grant.belongsTo(task, {
    as: "task_grant",
    foreignKey: "task"
  })
  grant.belongsTo(role, {
    as: "role_grant",
    foreignKey: "role"
  })

  // actiontype relations

  actiontype.hasMany(grant, {
    as: "actiontypes",
    foreignKey: "grant"
  })

  // actionlog relations

  actionlog.belongsTo(grant, {
    as: "grant_actionlog",
    foreignKey: "grant"
  })

  // role relations

  role.hasMany(grant: {
    as: "roles",
    foreignKey: "grant"
  })
  role.hasMany(assignment: {
    as: "roles",
    foreignKey: "assignment"
  })

  // assignment relations

  assignment.belongsTo(role: {
    as: "role_assignment",
    foreignKey: "role"
  })
  assignment.belongsTo(member: {
    as: "member_assignment",
    foreignKey: "member"
  })

  return {
    actionlog,
    actiontype,
    artefact,
    assignment,
    association,
    grant,
    member,
    project,
    role,
    task,
    team,
    user,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;