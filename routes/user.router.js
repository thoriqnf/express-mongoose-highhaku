const express = require('express');
const router = express.Router()

const {getAll, getByID, addUser} = require('../controllers/user.controller');

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", addUser);

module.exports = router