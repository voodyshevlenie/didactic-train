const sequelize = require("../db");
const { DataType, DataTypes, STRING } = require("sequelize");

const User = sequelize.define("user", {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  created_at: { type: DataTypes.DATE },
});

const Measurements = sequelize.define("measurements", {
  measurement_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { type: DataTypes.INTEGER, primaryKey: true },
  date: { type: DataTypes.DATE },
  height: { type: DataTypes.INTEGER },
  weight: { type: DataTypes.NUMBER },
  created_at: { type: DataTypes.DATE },
});

const Activity_Logs = sequelize.define("activity_logs", {
  activity_log_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { type: DataTypes.INTEGER, primaryKey: true },
  type: { type: DataTypes.STRING },
  distance: { type: DataTypes.NUMBER },
  calories_burned: { type: DataTypes.NUMBER },
  device_id: { type: DataTypes.INTEGER, primaryKey: true },
  created_at: { type: DataTypes.DATE },
});

const Notifications = sequelize.define("notifications", {
  notifications_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { type: DataTypes.INTEGER, primaryKey: true },
  message: { type: DataTypes.STRING },
  is_read: { type: DataTypes.BOOLEAN },
  created_at: { type: DataTypes.DATE },
});

const Devices = sequelize.define("devices", {
  devices_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { type: DataTypes.INTEGER, primaryKey: true },
  name_device: { type: DataTypes.STRING },
});

const Goals = sequelize.define("goals", {
  goals_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, primaryKey: true },
  start_date: { type: DataTypes.DATE },
  end_date: { type: DataTypes.DATE },
  notes: { type: DataTypes.STRING },
  created_at: { type: DataTypes.DATE },
});

User.hasMany(Measurements);
Measurements.belongsTo(User);

User.hasMany(Activity_Logs);
Activity_Logs.belongsTo(User);

User.hasMany(Notifications);
Notifications.belongsTo(User);

User.hasMany(Devices);
Devices.belongsTo(User);

User.hasMany(Goals);
Goals.belongsTo(User);

module.exports = {
  User,
  Measurements,
  Activity_Logs,
  Notifications,
  Devices,
  Goals,
};
