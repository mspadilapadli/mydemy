const e = require("express");
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.home); //home : login dan register
// router.get("/logout");
router.get("/courses", Controller.readCourses);
router.get("/courses/detail", Controller.courseDetail);

router.get("/courses/add", Controller.addCourse);
router.post("/courses/add", Controller.postAddCourse);

router.get("/courses/update/:id", Controller.updateCourse);
router.post("/courses/update/:id", Controller.postUpdateCourse);

router.get("/courses/delete/:id", Controller.deleteCourse);

module.exports = router;
