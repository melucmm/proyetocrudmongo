const express = require("express");
const router = express.Router();

// TEST SIMPLE (SIN CONTROLLER NI MIDDLEWARE)
router.get("/", (req, res) => {
  res.send("FUNCIONA CATEGORY ROUTE");
});

module.exports = router;