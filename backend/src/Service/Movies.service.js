const axios = require('axios');

const configration = require('../../config')
const base = configration.base_url;
const key = configration.tmdb_api_key;

const popularMovie = base + '/movie/popular?api_key=' + key + '&language=en-US&page=1&with_network=213';
const trendingMovie = base + '/trending/movie/week?api_key=' + key + '&language=en-US&page=1&with_network=213';
const genre = base + '/genre/movie/list?api_key=' + key + '&language=en-US&with_network=213';
const topRatedMovie = base + '/movie/top_rated?api_key=' + key + '&language=en-US&page=1&with_network=213';

makeRequest = (callback, url) => {
    axios.get(url).then(function (response) {
      return callback(response.data)
    }).catch(function (error) {
        if(error.response){
            return callback(null,error.response.data)
        }
        return callback(null,'Network error')
      })
}
getVideoList = (callback,id) => {
    
}
exports.getPopularMovie = (callback) =>{
   makeRequest(callback, popularMovie);
}

exports.getTrendingMovie = (callback) =>{
    makeRequest(callback, trendingMovie);
}

exports.getGenreMovie = (callback) =>{
    makeRequest(callback, genre);
}

exports.getTopRatedMovie = (callback) =>{
    makeRequest(callback, topRatedMovie);
}

exports.getVideos = (videoId, callback) =>{
    console.log('here')
    const videoMovieURL = base + `/movie/${videoId}/videos?api_key=` + key + '&language=en-US&page=1&with_network=213';
    axios.get(videoMovieURL).then(function (response) {
      return callback(response.data)
    }).catch(function (error) {
        if(error.response){
            return callback(null,error.response.data)
        }
        return callback(null,'Network error')
      })
}