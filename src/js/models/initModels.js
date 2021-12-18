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
  const actionlog = _actionlog(sequelize, _DataTypes);
  const actiontype = _actiontype(sequelize, _DataTypes);
  const artefact = _artefact(sequelize, _DataTypes);
  const assignment = _assignment(sequelize, _DataTypes);
  const association = _association(sequelize, _DataTypes);
  const grant = _grant(sequelize, _DataTypes);
  const member = _member(sequelize, _DataTypes);
  const project = _project(sequelize, _DataTypes);
  const role = _role(sequelize, _DataTypes);
  const task = _task(sequelize, _DataTypes);
  const team = _team(sequelize, _DataTypes);
  const user = _user(sequelize, _DataTypes);


  // user relations
  user.hasMany(member, {
    as: "users",
    foreignKey: "member"
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
    as: "assignment_members",
    foreignKey: "assignment"
  })
  member.hasMany(grant, {
    as: "grant_members",
    foreignKey: "grant"
  })

  // team relations

  team.hasMany(member, {
    as: "teams",
    foreignKey: "member"
  })
  team.hasMany(project, {
    as: "project_teams",
    foreignKey: "project"
  })

  // project relations

  project.belongsTo(team, {
    as: "team_projects",
    foreignKey: "team"
  })
  project.hasMany(task, {
    as: "unique_project",
    foreignKey: "task"
  })

  // task relations

  task.belongsTo(project, {
    as: "project_tasks",
    foreignKey: "project"
  })
  task.hasMany(grant, {
    as: "grant_tasks",
    foreignKey: "grant"
  })
  task.hasMany(association, {
    as: "association_tasks",
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
    as: "association_artefacts",
    foreignKey: "association"
  })
  artefact.hasMany(grant, {
    as: "grant_artefacts",
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
  grant.hasMany(actionlog, {
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

  role.hasMany(grant, {
    as: "grant_roles",
    foreignKey: "grant"
  })
  role.hasMany(assignment, {
    as: "assignment_roles",
    foreignKey: "assignment"
  })

  // assignment relations

  assignment.belongsTo(role, {
    as: "role_assignment",
    foreignKey: "role"
  })
  assignment.belongsTo(member, {
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