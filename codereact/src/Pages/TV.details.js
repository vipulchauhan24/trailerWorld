import React, { useEffect, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import YouTube from 'react-youtube';
import { image_url, tvCast, tvDetails, videoTV } from '../constant';

function TvDetails() {
    const [videoId, setVideoId] = useState(null);
    const [orignalName, setOrignalName] = useState(null);
    const [overview, setOverview] = useState(null);
    const [firstAiredDate, setFirstAiredDate] = useState(null);
    const [genres, setGenres] = useState(null);
    const [numberOfEpisodes, setNumberOfEpisodes] = useState(null);
    const [numberOfSeasons, setNumberOfSeasons] = useState(null);
    const [createdBy, setCreatedBy] = useState([]);
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(null);
    const [language, setLanguage] = useState(null);
    const [name, setName] = useState(null);
    const [tagLine, setTagLine] = useState(null);
    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
    };

    const concatGenres = (genres) => {
        let _genres = '';
        genres.forEach(genre => {
            _genres += genre.name + ',';
        });
        setGenres(_genres)
    }

    const getTvDetails = () => {
        if(sessionStorage.getItem('tvId')){
            const axios = require('axios');
            axios.post(tvDetails, {id:sessionStorage.getItem('tvId')}).then(res =>{
                const details = res.data.series;
                console.log(details)
                setOrignalName(details.original_name)
                setOverview(details.overview)
                setFirstAiredDate(details.first_air_date + ',')
                concatGenres(details.genres);
                setCreatedBy(details.created_by);
                setStatus(details.status);
                setLanguage(details.original_language);
                setName(details.name);
                setTagLine(details.tagline);
                setNumberOfEpisodes('No. of episodes: '+details.number_of_episodes + ',');
                setNumberOfSeasons('No. of seasons: '+details.number_of_seasons);
                getVideos();
                getCastDetails();
            }).catch(error =>{
                console.log(error)
            })
        }
    }

    const getCastDetails = () => {
        if(sessionStorage.getItem('tvId')){
            const axios = require('axios');
            axios.post(tvCast, {id:sessionStorage.getItem('tvId')}).then(res =>{
                const details = res.data.series;
                setCast(details.cast)
            }).catch(error =>{
                console.log(error)
            })
        }
    }

    const getVideos = () => {
        if(sessionStorage.getItem('tvId')){
            const axios = require('axios'); 
            const url = videoTV;
            axios.post(url,{videoId:sessionStorage.getItem('tvId')}).then(res=>{
                const list = res.data.series.results;
                // console.log(list) 
                setVideoId(list[0].key)
            }).catch(function (error) {
                // handle error
            })  
        }
        
    }

    useEffect(() => {
        getTvDetails();
    }, [])
    return (
        <div>
            <div className="columns is-full">
                <div className="column is-two-fifth">
                    <div>
                        <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
                    </div>
                </div>
                <div className="column is-three-fifth">
                    <h2>
                        <strong>{name}</strong>
                    </h2>
                    <h3>
                        {tagLine}
                    </h3>
                    <h3>
                        {firstAiredDate} {genres} {numberOfEpisodes} {numberOfSeasons}
                    </h3>
                    <p>
                        Overview
                        <br/>
                        {overview}
                    </p>
                    <p>
                        <strong>Status</strong>
                        <br/>
                        {status}
                    </p>
                    <p>
                        <strong>Original Name</strong>
                        <br/>
                        {orignalName}
                    </p>
                    <p>
                        <strong>Original Language</strong>
                        <br/>
                        {language}
                    </p>
                </div>
            </div>
            <div className="columns is-full">
                <div>
                    <h2>
                        Cast
                    </h2>
                    <ScrollContainer className="scroll-container container is-flex is-align-content-flex-start list__cards" hideScrollbars="false">
                    {
                        cast?(
                            cast.map(data => {
                                return (
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-2by3">
                                                <img src={image_url + data.profile_path} alt="Placeholder"/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4">{data.name}</p>
                                                <p class="subtitle is-6">{data.character}</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                
                            })
                        ):''
                    }
                    </ScrollContainer>
                </div>
                
            </div>
            <div className="columns is-full">
                <div>
                <h2>
                    Creators
                </h2>
                <ScrollContainer className="scroll-container container is-flex is-align-content-flex-start list__cards" hideScrollbars="false">
                {
                    createdBy?(
                        createdBy.map(data => {
                            return (
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-2by3">
                                            <img src={image_url + data.profile_path} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{data.name}</p>
                                            <p class="subtitle is-6">{data.character}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            
                        })
                    ):''
                }
                </ScrollContainer>
                </div>
            </div>
        </div>
    )
}


export default TvDetails