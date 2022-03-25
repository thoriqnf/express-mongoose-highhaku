const express = require('express');
const router = express.Router()

const userRouter = require("./user.router")
const courseRouter = require("./course.router")
const userGetCourseRouter = require("./userGetCourse.router")

router.get("/", (req, res) => {
  res.json("ini dari expres yg konek yg mongodb atlas dengan mongoose");
});

router.use("/user", userRouter)
router.use("/course", courseRouter)
router.use("/enroll-course", userGetCourseRouter)

module.exports = router