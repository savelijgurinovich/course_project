const { Collection } = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
const uuid = require('uuid');
const path = require('path')
const {Col} = require("sequelize/lib/utils");
const {Item} = require("../models/models");
class CollectionController {
    async create(req, res, next) {
      try {
          const {name, userId, topic, description} = req.body;
          const {image} = req.files;
          let filename = uuid.v4() + ".jpg";
          await image.mv(path.resolve(__dirname, '..', 'static', filename))
          const collection = await Collection.create({name, userId, topic, description, image: filename});
          return res.json(collection);
      } catch (err) {
          console.log(err);
          next(ApiError.badRequest(err.message));
      }
    }
    async getAll(req, res) {
        const userId = req.query;
        if (!userId) {
            const collections = await Collection.findAll();
            return res.json(collections);
        }
        else {
            const collections = await Collection.findAll({
                where: {userId}
            });
            return res.json(collections);
        }
    }
    async getOne(req, res) {
        const {id} = req.params;
        const collection = await Item.findOne({
            where:{id}
        });
        return res.json(collection);
    }
    async delete(req, res) {

    }
    async update(res, req) {

    }
}

module.exports = new CollectionController()