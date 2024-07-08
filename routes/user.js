const express = require("express");
const { registre, login, auth } = require("../controllers/usercontrol");
const { registreRules, validat } = require("../middleware/validator");
const { verifyAuth } = require("../middleware/verifAuth");

const router = express.Router();

router.post("/register", registreRules(), validat, registre);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);

module.exports = router;
