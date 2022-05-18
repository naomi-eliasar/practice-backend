"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Space.belongsTo(models.user, { foreignKey: "userId" });
      Space.hasMany(models.Story, { foreignKey: "spaceId" });
    }
  }
  Space.init(
    {
      title: { type: DataTypes.STRING, required: true },
      description: DataTypes.TEXT,
      backgroundColor: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Space",
    }
  );
  return Space;
};
