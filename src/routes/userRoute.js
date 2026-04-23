const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API users — placeholder");
});

module.exports = router;
