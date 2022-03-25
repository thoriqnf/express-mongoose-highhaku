const express = require('express');
const router = express.Router()

const { addUserGetCourse, getAll } = require('../controllers/userGetCourse.controller');

router.post("/", addUserGetCourse );
router.get("/", getAll);

module.exports = router