const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

// POST /movies
router.post('/', movieController.createMovie);

// GET /movies
router.get('/', movieController.getMovies);

// GET /movies/:id
router.get('/:id', movieController.getById);

// PUT /movies/:id
router.put('/:id', movieController.updateMovie);

// DELETE /movies/:id
router.delete('/:id', movieController.deleteMovie);

module.exports = router;