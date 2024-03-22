const e = require("express");
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.home); //home : login dan register

router.get("/register", Controller.register);
router.post("/register", Controller.postRegister);

router.get("/verif", Controller.verif);
router.post("/verif", Controller.postVerif);

router.get("/login", Controller.login);
router.post("/login", Controller.postLogin);

router.use((req, res, next) => {
    // console.log(req.session);
    if (!req.session.userId) {
        const error = `Login dulu BOSS!`;
        res.redirect(`/login?error=${error}`);
    } else {
        next();
    }
});
const isUser = (req, res, next) => {
    // console.log(req.session);
    if (req.session.userId && req.session.role === "user") {
        next();
    } else {
        const error = `ini punya users BOSS !`;
        res.redirect(`/login?error=${error}`);
    }
};
const isAdmin = (req, res, next) => {
    // console.log(req.session);
    if (req.session.userId && req.session.role === "admin") {
        next();
    } else {
        const error = `ini punya admin BOSS !`;
        res.redirect(`/login?error=${error}`);
    }
};

router.get("/logout", Controller.logout);
router.get("/coursesUser", isUser, Controller.readCoursesUser);
router.get("/courses", isAdmin, Controller.readCourses);
router.get("/courses/detail/:id", isAdmin, Controller.courseDetail);

router.get("/courses/add", isAdmin, Controller.addCourse);
router.post("/courses/add", isAdmin, Controller.postAddCourse);

router.get("/courses/update/:id", isAdmin, Controller.updateCourse);
router.post("/courses/update/:id", isAdmin, Controller.postUpdateCourse);

router.get("/courses/delete/:id", isAdmin, Controller.deleteCourse);

module.exports = router;
