import React, { useEffect, useState } from 'react'
import Card from './Card'
import ScrollContainer from 'react-indiana-drag-scroll'

async function getShows(url, callback){
    const axios = require('axios'); 
    await axios.get(url).then(res=>{
        return callback(res.data.series.results)
    }).catch(function (error) {
        // handle error
        return callback(null,error)
      })
}

function Cards({url}) {
    const [popularSeries, setPopularSeries] = useState([]);
    
    useEffect(() => {
        if(popularSeries.length < 1){
            getShows(url,(res,err)=>{
                if(res){
                    setPopularSeries(res);
                    
                } else{
                    console.log(err);
                }
            })
        }
    },[popularSeries,url]);
    return (
        <ScrollContainer className="scroll-container container is-flex is-align-content-flex-start list__cards">
        {
                
                popularSeries?(
                    popularSeries.map((show) => {
                        return <Card show={show} key={show.id}/>
                    })
                 ) :''
            }
      </ScrollContainer>
        // <div className="container is-flex is-align-content-flex-start is-justify-content-space-around list__cards">
            
        // </div>
    )
}

export default Cards
