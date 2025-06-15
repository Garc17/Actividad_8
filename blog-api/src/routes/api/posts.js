const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/post.controller');

router.get('/', postsController.getPosts);
router.post('/', postsController.createPost);
router.get('/autor/:id', postsController.getPostsByAutor);

module.exports = router;
