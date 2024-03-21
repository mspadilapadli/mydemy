const e = require("express");
const { param } = require("../routers");
const { Category, Course, User, UserCourse, UserLog } = require("../models");
const { Op } = require("sequelize");

class Controller {
    static async home(req, res) {
        try {
            res.send(`ini home`);
        } catch (error) {
            res.send(error);
        }
    }
    static async readCourses(req, res) {
        try {
            res.send(`ini courses`);
        } catch (error) {
            res.send(error);
        }
    }

    static async courseDetail(req, res) {
        try {
            res.send(`ini courses detail`);
        } catch (error) {
            res.send(error);
        }
    }

    static async addCourse(req, res) {
        try {
            res.send(`ini courses get add`);
        } catch (error) {
            res.send(error);
        }
    }
    static async postAddCourse(req, res) {
        try {
            res.send(`ini courses post add`);
        } catch (error) {
            res.send(error);
        }
    }

    static async updateCourse(req, res) {
        try {
            res.send(`ini courses update add`);
        } catch (error) {
            res.send(error);
        }
    }
    static async postUpdateCourse(req, res) {
        try {
            res.send(`ini courses post update add`);
        } catch (error) {
            res.send(error);
        }
    }
    static async deleteCourse(req, res) {
        try {
            res.send(`ini courses delete`);
        } catch (error) {
            res.send(error);
        }
    }
}
module.exports = Controller;
