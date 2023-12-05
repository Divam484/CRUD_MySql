
module.exports = (sequelize, DataTypes) => {
  const Mark = sequelize.define("Mark", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender:{
      type:DataTypes.STRING,
      allowNull:false
    },
    student_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'students',
        key: 'id',
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
  });

  return Mark;
};
