"use strict";
module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define(
        "Event",
        {
            id: { 
                type: Sequelize.UUID, 
                defaultValue: Sequelize.UUIDV4, 
                primaryKey: true 
            },
            title: { type: Sequelize.STRING, allowNull: false },
            description: { type: Sequelize.TEXT, allowNull: true },
            date: { type: Sequelize.DATE, allowNull: false },
            created_by: { 
                type: Sequelize.UUID, 
                allowNull: false,
                references: {
                    model: "Users",
                    key: "id"
                }
            }
        },
        { timestamps: true }
    );

    Event.associate = (models) => {
        Event.belongsTo(models.User, { foreignKey: "created_by", as: "admin" });
    };

    return Event;
};
