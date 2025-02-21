const express = require('express');
const router = express.Router();

const getController = require('../controllers/GetController');
const postController = require('../controllers/PostController');

router.get('/', getController);
router.post('/', postController);

module.exports = router;