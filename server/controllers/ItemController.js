const {Item, Collection} = require("../models/models")
const ApiError = require('../error/ApiError.js');
const uuid = require("uuid");
const path = require("path");

class ItemController {
    async create(req, res) {
        const {name, userId, collectionId, description, tags, comments, likes} = req.body;
        const {image} = req.files;
        let filename = uuid.v4() + ".jpg";
        await image.mv(path.resolve(__dirname, '..', 'static', filename))
        const item = await Item.create({name, userId, collectionId, description, tags, comments, likes, image: filename});
        return res.json(item);

    }
    async getAll(req, res) {
        const items = await Item.findAll({
            where: {collectionId: req.query.collectionId}
        });
        return res.json(items);
    }
    async getOne(req, res) {
const {id} = req.params;
const item = await Item.findOne({
    where:{id}
});
return res.json(item);
    }
    async delete(req, res) {

    }
    async update(req, res) {

    }
}

module.exports = new ItemController()