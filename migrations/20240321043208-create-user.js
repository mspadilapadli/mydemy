"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fullName: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            gender: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            age: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            LoginId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "UserLogs",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    },
};
