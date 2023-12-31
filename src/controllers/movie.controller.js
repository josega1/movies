const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Director = require('../models/Director');
const Genre = require('../models/Genre');

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({include :[Actor, Director, Genre]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Movie.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setMoviesActor = catchError(async(req, res) => {
    const { id } = req.params;
    const movies = await Movie.findByPk(id);
    await movies.setActors(req.body);
    const result = await movies.getActors();
    return res.json(result);
});
const setMoviesDirector = catchError(async(req, res) => {
    const { id } = req.params;
    const movies = await Movie.findByPk(id);
    await movies.setDirectors(req.body);
    const result = await movies.getDirectors();
    return res.json(result);
});
const setMoviesGenre = catchError(async(req, res) => {
    const { id } = req.params;
    const movies = await Movie.findByPk(id);
    await movies.setGenres(req.body);
    const result = await movies.getGenres();
    return res.json(result);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMoviesActor,
    setMoviesDirector,
    setMoviesGenre 
}