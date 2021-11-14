const tvService = require('../Service/Tv.service');

exports.getPopularTv = (req,res,next) =>{
    tvService.getPopularTv((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getTrendingTv = (req,res,next) =>{
    tvService.getTrendingTv((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getGenreTv = (req,res,next) =>{
    tvService.getGenreTv((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getTopRatedTv = (req,res,next) =>{
    tvService.getTopRatedTv((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getAiringToday = (req,res,next) =>{
    tvService.getAiringToday((response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}

exports.getVideos = (req,res,next) =>{
    tvService.getVideos(req.body.videoId,(response, error)=>{
        if(error){
            if(error.status_message){
                return res.status(400).send({success:0,message: error.status_message})
            }
            return res.status(400).send({success:0,message: 'Bad request'})
        }
        return res.status(200).send({success:1, series:response})
    })
}