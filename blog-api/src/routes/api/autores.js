const express = require('express');
const router = express.Router();
const autoresController = require('../../controllers/autor.Controller');

router.get('/', autoresController.getAutores);
router.post('/', autoresController.createAutor);

module.exports = router;
