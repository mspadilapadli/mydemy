"use strict";
const { Model } = require("sequelize");
const helper = require("../helper");
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Course.belongsTo(models.Category);
            Course.belongsToMany(models.User, { through: models.UserCourse });
        }
        static async getCourses(Category, option) {
            try {
                let data = await Course.findAll({
                    include: {
                        model: Category,
                    },
                    where: option,
                    order: [[`name`, "asc"]],
                });
                return data;
            } catch (error) {
                throw error;
            }
        }
        get codeCourse() {
            let value = `${this.name[0]}${this.id}`;
            return helper.formatCode(value, this.CategoryId);
        }
    }
    Course.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: `name is required`,
                    },
                    notNull: {
                        msg: `name is required`,
                    },
                },
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: `desciption is required`,
                    },
                    notNull: {
                        msg: `desciption is required`,
                    },
                    minWord(value) {
                        let word = value.split(" ");
                        if (word.length < 3) {
                            throw new Error(`Desciption minima 3 kata`);
                        }
                    },
                },
            },
            CategoryId: DataTypes.INTEGER,
            duration: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Course",
            hooks: {
                beforeCreate(instance, option) {
                    instance.duration = `16 Weeks`;
                },
            },
        }
    );
    return Course;
};
