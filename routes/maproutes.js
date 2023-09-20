
const express = require("express");
const { checkAuthentication } = require("../middlewares");
const router = express.Router(); 
router.get("/maps", checkAuthentication, (req, res) => {
  res.render("findnearby");
});

module.exports = router;
