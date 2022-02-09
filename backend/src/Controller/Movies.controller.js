const movieService = require('../Service/Movies.service');

exports.getPopularMovie = (req,res,next) =>{
    movieService.getPopularMovie((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getTrendingMovie = (req,res,next) =>{
    movieService.getTrendingMovie((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getGenreMovie = (req,res,next) =>{
    movieService.getGenreMovie((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getTopRatedMovie = (req,res,next) =>{
    movieService.getTopRatedMovie((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(40).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getVideos = (req,res,next) =>{
    movieService.getVideos(req.body.videoId,(response, error)=>{
        if(error){
            console.log(error)
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request2'})
        }
        return res.status(200).send({success:1, series:response})
    })
}