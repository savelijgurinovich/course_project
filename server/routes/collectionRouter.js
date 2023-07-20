const Router = require('express');
const router = new Router;
const collectionController = require('../controllers/CollectionController.js');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware.js');

router.post('/',checkRoleMiddleware('admin', 'user'), collectionController.create);
router.get('/', collectionController.getAll);
router.get('/:id', collectionController.getOne);


module.exports = router;