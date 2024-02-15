const DataTypes = require("sequelize").DataTypes;
const actionlog = require("../models/actionlog");
const actiontype = require("../models/actiontype");
const artefact = require("../models/artefact");
const assignment = require("../models/assignment");
const association = require("../models/association");
const grant = require("../models/grant");
const member = require("../models/member")
const project = require("../models/project");
const role = require("../models/role");
const task = require("../models/task");
const team = require("../models/team");
const user = require("../models/user");

const associate = () => {

  // user relations
  user.hasMany(member, {
    as: "users",
    foreignKey: "member"
  })

  // member relations

  member.belongsTo(user, {
    as: "member_member",
    foreignKey: "user_id"
  })
  member.belongsTo(team, {
    as: "team_member",
    foreignKey: "team_id"
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
}


module.exports = associate;
