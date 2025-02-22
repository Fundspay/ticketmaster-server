const winston = require("winston");

const isProduction = process.env.NODE_ENV === "production";

const logger = winston.createLogger({
    level: "debug",
    format: isProduction ? winston.format.json() : winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ],
});

module.exports = logger;