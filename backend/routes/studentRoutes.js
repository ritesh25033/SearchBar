const express = require("express")
const { searchStudents } = require("../controllers/studentController")

const router = express.Router()

router.get("/students", searchStudents)

module.exports = router

