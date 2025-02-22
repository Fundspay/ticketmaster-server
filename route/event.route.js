const express = require("express");
const { createEvent, listEvents } = require("../controller/event.controller");

const router = express.Router();

// 📌 Admin Creates Event
router.post("/create",  createEvent);

// 📌 Get All Events
router.get("/", listEvents);

module.exports = router;
