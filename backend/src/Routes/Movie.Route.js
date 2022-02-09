const express = require('express');
const router = express.Router();
const tvController = require('../Controller/Movies.controller');
router.get('/popular', tvController.getPopularMovie)
router.get('/trending', tvController.getTrendingMovie)
router.get('/genre', tvController.getGenreMovie)
router.get('/top-rated', tvController.getTopRatedMovie)
router.post('/videos', tvController.getVideos)

module.exports = router;