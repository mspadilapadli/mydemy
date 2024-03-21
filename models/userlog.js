"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
    class UserLog extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            UserLog.hasOne(models.User, { foreignKey: "LoginId" });
        }
    }
    UserLog.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            role: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "UserLog",
            hooks: {
                beforeCreate(instance, option) {
                    let salt = bcrypt.genSaltSync(10);
                    let hash = bcrypt.hashSync(instance.password, salt);

                    instance.password = hash;
                },
            },
        }
    );
    return UserLog;
};
