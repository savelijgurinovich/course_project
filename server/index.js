const express = require('express');
const sequelize = require('./db.js');
const models = require('./models/models.js');
const PORT = 5000;
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.js');
const errorHandler = require('../server/middleware/ErrorHandlingMiddleware.js');
const path = require('path');


app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);


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