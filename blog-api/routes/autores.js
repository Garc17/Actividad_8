const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autorController');

router.get('/', autoresController.getAutores);
router.post('/', autoresController.createAutor);

module.exports = router;
