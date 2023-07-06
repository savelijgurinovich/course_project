const express = require('express');
const sequelize = require('./db.js');
const PORT = 5000;
const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log('Server is okay');
        });
    }
    catch (e) {
        console.log(e);
    }
}
start();