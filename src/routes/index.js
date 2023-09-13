const express = require('express');
const routerDirector = require('./director.router');
const genreRouter = require('./genre.router');
const routerActor = require('./actor.router');
const movieRouter = require('./movie.router');
const router = express.Router();

router.use('/genres', genreRouter)
router.use('/directors', routerDirector)
router.use('/actors', routerActor)
router.use('/movies', movieRouter)
// colocar las rutas aquí


module.exports = router;