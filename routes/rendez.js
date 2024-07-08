const express = require("express");
const {
  addrendezvous,
  getappointment,
  getoneappointment,
  deleteAppointment,
  Updateappointment,
} = require("../controllers/rendezvouscontrol");
const router = express.Router();

router.post("/addRDV", addrendezvous);
router.get("/get_appointment", getappointment);
router.get("/get_appointment_user/:id", getoneappointment);
router.delete("/delete_appointment/:id", deleteAppointment);
router.put("/edit_appointment/:id", Updateappointment);

module.exports = router;
