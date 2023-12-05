const dbConfig = require("../config/dbconfig.js");

const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected ....");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.school = require("./schoolModel.js")(sequelize, DataTypes);
db.students = require("./studentModel.js")(sequelize, DataTypes);
// db.students1 = require("./studentModel.js")(sequelize, DataTypes);
db.marks = require("./markModel.js")(sequelize, DataTypes);

db.students.hasMany(db.marks, { foreignKey: 'student_id' });
db.marks.belongsTo(db.students, { foreignKey: 'student_id'});



db.school.hasMany(db.students, { foreignKey: 'school_id' });
db.students.belongsTo(db.school, { foreignKey: 'school_id' });

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
