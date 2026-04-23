const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointmentController");
const verifyToken = require("../middleware/verifyToken");

router.get("/", appointmentController.getAllAppointments);
router.post("/", appointmentController.createAppointment);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;