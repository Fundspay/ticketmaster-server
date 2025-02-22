const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth.middleware");
const authRoutes = require("./auth.route");
const eventRoutes = require("./event.route");
const ticketRoutes = require("./ticket.route");


router.use("/auth", authRoutes);
router.use("/events", eventRoutes);
router.use("/tickets", ticketRoutes);


module.exports = router;