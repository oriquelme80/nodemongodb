const express = require("express");
const { getItems, getItem } = require("../controllers/tracks");
const router = express.Router();

router.get("/", getItems)
router.get("/:id",getItem)


module.exports = router
