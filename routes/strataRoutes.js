const express = require("express");
const router = express.Router();

const {joinStudent} = require("../controller/joinStudent");

router.post("/joinStudent",joinStudent);

module.exports = router;