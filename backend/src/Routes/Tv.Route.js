const express = require('express');
const router = express.Router();
const tvController = require('../Controller/Tv.controller');
router.get('/popular', tvController.getPopularTv)
router.get('/trending', tvController.getTrendingTv)
router.get('/genre', tvController.getGenreTv)
router.get('/top-rated', tvController.getTopRatedTv)
router.get('/airing-today', tvController.getAiringToday)
router.post('/videos', tvController.getVideos)

module.exports = router;