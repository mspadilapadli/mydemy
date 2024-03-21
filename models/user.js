"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsTo(models.UserLog, { foreignKey: "LoginId" });
            User.belongsToMany(models.Course, { through: models.UserCourse });
        }
    }
    User.init(
        {
            fullName: DataTypes.STRING,
            gender: DataTypes.STRING,
            age: DataTypes.INTEGER,
            LoginId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
