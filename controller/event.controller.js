const model = require("../model");

// 📌 Create Event (No Authentication Required)
exports.createEvent = async (req, res) => {
    const { title, description, date, created_by } = req.body;

    try {
        // Validate input
        if (!title || !date || !created_by) {
            return res.status(400).json({ error: "Title, date, and created_by are required" });
        }

        // Create new event
        const newEvent = await model.Event.create({
            title,
            description,
            date,
            created_by
        });

        res.status(201).json({ message: "Event created successfully", event: newEvent });
    } catch (err) {
        console.error("Error creating event:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// 📌 Get All Events (No Authentication Required)
exports.listEvents = async (req, res) => {
    try {
        const events = await model.Event.findAll();
        res.json(events);
    } catch (err) {
        console.error("Error fetching events:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
