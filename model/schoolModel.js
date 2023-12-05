

module.exports = (sequelize, DataTypes) => {

  const School = sequelize.define("Schools", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    schoolname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
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


  return School;
};

