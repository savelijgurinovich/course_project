const Router = require('express');
const router = new Router;
const itemController = require('../controllers/ItemController.js');
const commentController = require('../controllers/CommentController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware.js');

router.post('/',checkRoleMiddleware('admin'), itemController.create);
router.post('/comments', commentController.create)
router.get('/', itemController.getAll);
router.get('/comments', commentController.getAll);
router.get('/:id', itemController.getOne);


module.exports = router;