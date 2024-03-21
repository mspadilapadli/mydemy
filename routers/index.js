const e = require("express");
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/register", Controller.register);
router.post("/register", Controller.postRegister);

router.get("/login", Controller.login);
router.post("/login", Controller.postLogin);

router.get("/", Controller.home); //home : login dan register
// router.get("/logout");
router.get("/courses", Controller.readCourses);
router.get("/courses/detail/:id", Controller.courseDetail);

router.get("/courses/add", Controller.addCourse);
router.post("/courses/add", Controller.postAddCourse);

router.get("/courses/update/:id", Controller.updateCourse);
router.post("/courses/update/:id", Controller.postUpdateCourse);

router.get("/courses/delete/:id", Controller.deleteCourse);

module.exports = router;
