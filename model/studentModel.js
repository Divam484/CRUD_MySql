

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roll_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    standard: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender:{
      type:DataTypes.STRING,
      allowNull:false
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      references: {
        model: 'Schools',
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
  
  return Student;
};
