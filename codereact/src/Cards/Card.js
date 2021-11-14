import React, { useState } from 'react'
import { image_url, videoTV } from '../constant'
import YouTube from 'react-youtube';

function Card({show}) {
    const [toggle, setToggle] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const openModal = (id) => {
        if(document.getElementById("modal__video" + id).style.display === 'none'){
            const axios = require('axios'); 
            axios.post(videoTV,{videoId:id}).then(res=>{
                res.data.series.resultsforEach(element => {
                    if(element.type === 'Trailer') {
                        setVideoId(element.key);
                    }
                });
            }).catch(function (error) {
                // handle error
            })
            setToggle(true);
            document.getElementById("modal__video" + id).style.display = 'flex';
        } else {
            setToggle(false);
            document.getElementById("modal__video" + id).style.display = 'none';
        }
    }

    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return (
        <div>
            <div onClick={()=>{openModal(show.id)}} className="card">
                <div className="card-image">
                    <figure className="image is-3by4">
                        <img src={image_url+show.poster_path} alt={show.name}/>
                    </figure>
                </div>
            </div>
            <div id={"modal__video" + show.id} class="modal">
                <div onClick={()=>{openModal(show.id)}} class="modal-background"></div>
                <div class="modal-content">
                {
                    toggle?(<YouTube videoId={videoId} opts={opts} onReady={_onReady} />):''
                }
                </div>
                <button onClick={()=>{openModal(show.id)}} class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default Card
