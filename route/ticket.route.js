const express = require("express");
const { registerForEvent, getUserTickets } = require("../controller/ticket.controller");

const router = express.Router();

// 📌 Register for an Event
router.post("/register", registerForEvent);

// 📌 Get User's Tickets
router.get("/", getUserTickets);

module.exports = router;
