import React, { useEffect, useState } from 'react'
import Card from './Card'
import ScrollContainer from 'react-indiana-drag-scroll'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
async function getShows(url, callback){
    const axios = require('axios'); 
    await axios.get(url).then(res=>{
        return callback(res.data.series.results)
    }).catch(function (error) {
        // handle error
        return callback(null,error)
      })
}

function Cards({url,type}) {
    const [showCard, setShows] = useState([]);
    const [loading, setLoader] = useState(true);
    
    useEffect(() => {
        if(showCard.length < 1){
            getShows(url,(res,err)=>{
                if(res){
                    setShows(res);
                    setLoader(false);
                    
                } else{
                    console.log(err);
                }
            })
        }
    },[showCard,url]);
    return (
        <ScrollContainer className="scroll-container container is-flex is-align-content-flex-start list__cards" hideScrollbars="false">
        {
            showCard?(
                showCard.map((show) => {
                    return <Card type={type} show={show} key={show.id}/>
                })
                ) :''
        }
        {
            loading?(
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
                ) :''
        }
        
      </ScrollContainer>
    )
}

export default Cards
