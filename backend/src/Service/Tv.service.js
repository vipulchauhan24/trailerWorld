const axios = require('axios');

const configration = require('../../config')
const base = configration.base_url;
const key = configration.tmdb_api_key;

const popularTv = base + '/tv/popular?api_key=' + key + '&language=en-US&page=1&with_network=213';
const trendingTv = base + '/trending/tv/week?api_key=' + key + '&language=en-US&page=1&with_network=213';
const genre = base + '/genre/tv/list?api_key=' + key + '&language=en-US&with_network=213';
const topRatedTv = base + '/tv/top_rated?api_key=' + key + '&language=en-US&page=1&with_network=213';
const airingTodayTv = base + '/tv/airing_today?api_key=' + key + '&language=en-US&page=1&with_network=213';

makeRequest = (callback, url) => {
    axios.get(url).then(function (response) {
        console.log('response',response)
      return callback(response.data)
    }).catch(function (error) {
        if(error.response){
            return callback(null,error.response.data)
        }
        console.log(error)
        return callback(null,'Network error')
      })
}
exports.getPopularTv = (callback) =>{
   makeRequest(callback, popularTv);
}

exports.getTrendingTv = (callback) =>{
    makeRequest(callback, trendingTv);
}

exports.getGenreTv = (callback) =>{
    makeRequest(callback, genre);
}

exports.getTopRatedTv = (callback) =>{
    makeRequest(callback, topRatedTv);
}

exports.getAiringToday = (callback) =>{
    makeRequest(callback, airingTodayTv);
}

exports.getVideos = (videoId, callback) =>{
    const videoTvURL = base + `/tv/${videoId}/videos?api_key=` + key + '&language=en-US&page=1';
    axios.get(videoTvURL).then(function (response) {
      return callback(response.data)
    }).catch(function (error) {
        if(error.response){
            return callback(null,error.response.data)
        }
        return callback(null,'Network error')
      })
}

exports.getTvDetails = (id, callback) =>{
    makeRequest(callback, `${base}/tv/${id}?api_key=${key}&language=en-US&page=1&with_network=213`);
}

exports.getCastDetails = (id, callback) =>{
    makeRequest(callback, `${base}/tv/${id}/credits?api_key=${key}&language=en-US&page=1&with_network=213`);
}