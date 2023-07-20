const {Sequelize} = require('sequelize');
module.exports = new Sequelize(
    'fullstack_project',
    'root',
    'saveliy147',
    {
       dialect: 'postgres',
        host: 'localhost',
        port: 5432,
    }

)