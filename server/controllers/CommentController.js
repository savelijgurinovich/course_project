const {Comment} = require("../models/models");
const ApiError = require('../error/ApiError.js');

class CommentController {
    async create(req, res) {
        const {userId, itemId, text} = req.body;
        const comment = await Comment.create({userId, itemId, text});
        return res.json(comment);

    }
    async getAll(req, res) {
        const comments = await Comment.findAll({
            where: {itemId: req.query.itemId}
        });
        return res.json(comments);
    }
    async delete(req, res) {

    }
}

module.exports = new CommentController()