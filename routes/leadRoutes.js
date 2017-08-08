var express = require('express');
var router = express.Router();
var leadController = require('../controllers/leadController.js');

/*
 * GET
 */
router.get('/', leadController.list);

/*
 * GET
 */
router.get('/:id', leadController.show);

/*
 * POST
 */
router.post('/', leadController.create);

/*
 * PUT
 */
router.put('/:id', leadController.update);

/*
 * DELETE
 */
router.delete('/:id', leadController.remove);

module.exports = router;
