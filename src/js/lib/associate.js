const DataTypes = require("sequelize").DataTypes;
const actionlog = require("../models/actionlog");
const actiontype = require("../models/actiontype");
const artefact = require("../models/artefact");
const assignment = require("../models/assignment");
const association = require("../models/association");
const grant = require("../models/grant");
const user = require("../models/user")
const project = require("../models/project");
const role = require("../models/role");
const task = require("../models/task");
const team = require("../models/team");
const user = require("../models/user");

const associate = () => {

  // user relations
  user.hasMany(user, {
    as: "users",
    foreignKey: "user"
  })

  // user relations

  user.belongsTo(user, {
    as: "user_user",
    foreignKey: "user_id"
  })
  user.belongsTo(team, {
    as: "team_user",
    foreignKey: "team_id"
  })
  user.hasMany(assignment, {
    as: "assignment_users",
    foreignKey: "assignment"
  })
  user.hasMany(grant, {
    as: "grant_users",
    foreignKey: "grant"
  })

  // team relations

  team.hasMany(user, {
    as: "teams",
    foreignKey: "user"
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
  grant.belongsTo(user, {
    as: "user_grant",
    foreignKey: "user"
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
  assignment.belongsTo(user, {
    as: "user_assignment",
    foreignKey: "user"
  })
}


module.exports = associate;
