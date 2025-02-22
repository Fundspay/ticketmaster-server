"use strict";
module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define(
        "Ticket",
        {
            id: { 
                type: Sequelize.UUID, 
                defaultValue: Sequelize.UUIDV4, 
                primaryKey: true 
            },
            user_id: { 
                type: Sequelize.UUID, 
                allowNull: false,
                references: {
                    model: "Users",
                    key: "id"
                }
            },
            event_id: { 
                type: Sequelize.UUID, 
                allowNull: false,
                references: {
                    model: "Events",
                    key: "id"
                }
            }
        },
        { timestamps: true }
    );

    Ticket.associate = (models) => {
        Ticket.belongsTo(models.User, { foreignKey: "user_id" });
        Ticket.belongsTo(models.Event, { foreignKey: "event_id" });
    };

    return Ticket;
};
