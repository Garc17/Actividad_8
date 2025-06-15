const express = require('express');
const router = express.Router();

const autoresRoutes = require('./api/autores');
const postsRoutes = require('./api/posts');

router.use('/autores', autoresRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
