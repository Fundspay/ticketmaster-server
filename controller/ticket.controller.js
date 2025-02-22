const model = require("../model");

// 📌 Register for an Event
exports.registerForEvent = async (req, res) => {
    const { user_id, event_id } = req.body;

    try {
        // Check if event exists
        const event = await model.Event.findByPk(event_id);
        if (!event) return res.status(404).json({ error: "Event not found" });

        // Check if user already has a ticket
        const existingTicket = await model.Ticket.findOne({ where: { user_id, event_id } });
        if (existingTicket) return res.status(400).json({ error: "User already registered for this event" });

        // Register user for the event
        const ticket = await model.Ticket.create({ user_id, event_id });

        res.status(201).json({ message: "Ticket registered successfully", ticket });
    } catch (err) {
        console.error("Error registering ticket:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// 📌 Get User's Tickets
exports.getUserTickets = async (req, res) => {
    const { user_id } = req.query; // Get user ID from query params

    try {
        const tickets = await model.Ticket.findAll({
            where: { user_id },
            include: [{ model: model.Event }]
        });

        res.json(tickets);
    } catch (err) {
        console.error("Error fetching tickets:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
