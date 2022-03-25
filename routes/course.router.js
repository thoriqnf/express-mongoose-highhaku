const express = require('express');
const router = express.Router()

const { addCourse } = require('../controllers/course.controller');

router.post("/", addCourse);

module.exports = router