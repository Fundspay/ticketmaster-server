"use strict";
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        "User",
        {
            id: { 
                type: Sequelize.UUID, 
                defaultValue: Sequelize.UUIDV4, 
                primaryKey: true 
            },
            name: { type: Sequelize.STRING, allowNull: false },
            email: { type: Sequelize.STRING, allowNull: false, unique: true },
            password: { type: Sequelize.STRING, allowNull: false },
            role: { type: Sequelize.STRING, defaultValue: "user" },
           
        },
        { timestamps: true }
    );
   

    return User;
};
