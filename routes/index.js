// Index Router
const express = require("express");
const router = express.Router();

/**
 * @desc     Index Page
 * @route    GET /
 * @access   Public
 */
router.get("/", (req, res) => {
  res.status(200).send("index.html");
});

module.exports = router;
