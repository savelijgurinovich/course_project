const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "GUEST"}
});

const Collection = sequelize.define('collection', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    userId: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING},
    topic: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING}
});

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    userId: {type: DataTypes.INTEGER},
    collectionId: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING},
    tags: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING}
});

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER},
    itemId: {type: DataTypes.INTEGER},
    text: {type: DataTypes.STRING}
})

User.hasMany(Collection);
Collection.belongsTo(User);

User.hasMany(Item);
Item.belongsTo(User);

Collection.hasMany(Item);
Item.belongsTo(Collection);

User.hasMany(Comment);
Comment.belongsTo(User);

Item.hasMany(Comment);
Comment.belongsTo(Item);

module.exports = {User, Collection, Item, Comment}

