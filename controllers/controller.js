const e = require("express");
const { param } = require("../routers");
const { Category, Course, User, UserCourse, UserLog } = require("../models");
const { Op } = require("sequelize");

class Controller {
    static async home(req, res) {
        try {
            // res.send(`ini home`);
            res.render("home");
        } catch (error) {
            res.send(error);
        }
    }
    static async readCourses(req, res) {
        try {
            // res.send(`ini courses`);
            let { search, del } = req.query;
            let option = {};
            if (search) {
                option.name = {
                    [Op.iLike]: `%${search}%`,
                };
            }
            let data = await Course.getCourses(Category, option);

            // let course = await data.getUsers();
            // console.log(data);
            // res.send({ data });
            res.render("show-courses", { data, del });
        } catch (error) {
            // console.log(error);
            res.send(error);
        }
    }

    static async courseDetail(req, res) {
        try {
            // res.send(`ini courses detail`);
            let { id } = req.params;
            // console.log(id);
            let data = await Course.findByPk(id);
            let usersCourse = await data.getUsers();
            // res.send({ data, usersCourse });
            res.render("show-courses-detail", { data, usersCourse });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    static async addCourse(req, res) {
        try {
            // res.send(`ini courses get add`);
            let { error } = req.query;
            let data = await Category.findAll();
            // console.log(data);
            res.render("form-course", { data, error });
        } catch (error) {
            res.send(error);
        }
    }
    static async postAddCourse(req, res) {
        try {
            // console.log(req.body);
            let { name, description, CategoryId } = req.body;
            // res.send(`ini courses post add`);
            await Course.create({ name, description, CategoryId });
            res.redirect("/courses");
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                let errs = error.errors.map((el) => {
                    return el.message;
                });
                // res.send(errs);
                res.redirect(`/courses/add?error=${errs}`);
            } else {
                res.send(error);
            }
        }
    }

    static async updateCourse(req, res) {
        try {
            // res.send(`ini courses update add`);
            let { error } = req.query;
            let { id } = req.params;
            let dataCourse = await Course.findByPk(id);
            let dataCategory = await Category.findAll();

            res.render("form-update-course", {
                dataCourse,
                dataCategory,
                error,
            });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
    static async postUpdateCourse(req, res) {
        try {
            let { id } = req.params;
            // console.log(req.body);
            let { name, description, CategoryId, duration } = req.body;
            let input = { name, description, CategoryId, duration };
            // res.send(`ini courses post update add`);
            await Course.update(input, {
                where: { id },
            });
            res.redirect("/courses");
        } catch (error) {
            let { id } = req.params;
            if (error.name === "SequelizeValidationError") {
                let errs = error.errors.map((el) => {
                    return el.message;
                });
                // res.send(errs);
                res.redirect(`/courses/update/${id}?error=${errs}`);
            } else {
                res.send(error);
            }
        }
    }
    static async deleteCourse(req, res) {
        try {
            let { id } = req.params;
            // res.send(`ini courses delete`);
            let delData = await Course.findByPk(id);
            await Course.destroy({
                where: { id },
            });
            res.redirect(`/courses?del=${delData.name}`);
        } catch (error) {
            res.send(error);
        }
    }
}
module.exports = Controller;
