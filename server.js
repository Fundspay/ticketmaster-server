const express = require("express");
const app = express();

const cors = require("cors");
const compression = require("compression");
const model = require("./model/index");
const CONFIG = require("./config/config");
const v1 = require("./route/v1");
const path = require('path');

const logger = require("./utils/logger.service");
const expressWinston = require("express-winston");

// initialize BodyParser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// use response compression
app.use(compression());

// CORS
app.use(cors());
app.options('*', cors());

// Sync Database
model.sequelize
    .sync()
    .then(function () {
        logger.info("sequelize: Database Sync Success")
    })
    .catch(function (err) {
        logger.debug("sequelize: Database Sync Failed");
        logger.debug(err);
    });

// Routes for API v1
app.use("/api/v1", v1);

// Health Check Endpoint
app.use('/api/healthz', async (req, res) => {
    let testDb = await model.sequelize.query('SELECT 1+1 AS result', {type: model.sequelize.QueryTypes.SELECT})
    if (testDb[0].result === 2) {
        res.status(200).send('OK');
    } else {
        res.status(500).send('Database Error');
    }
});

// Enable HTTP Request Logger
app.use(expressWinston.logger({
    winstonInstance: logger,
    expressFormat: true,
    ignoreRoute: function (req, res) {
        return req.url === '/api/healthz';
    }
}))

// Enable HTTP Error Logger
app.use(expressWinston.errorLogger({
    winstonInstance: logger,
    expressFormat: true
}));

module.exports = app;

app.listen(CONFIG.port, () =>
    logger.info("express: Listening on port " + CONFIG.port)
);

