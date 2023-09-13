const { getAll, create, getOne, remove, update, setMoviesActor, setMoviesDirector, setMoviesGenre } = require('../controllers/movie.controller');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/')
    .get(getAll)
    .post(create);

movieRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

movieRouter.route('/:id/actors')
    .post(setMoviesActor);

movieRouter.route('/:id/directors')
    .post(setMoviesDirector);

movieRouter.route('/:id/genres')
    .post(setMoviesGenre);

module.exports = movieRouter;