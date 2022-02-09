import React from 'react'
import Cards from '../Cards/Cards'
import { airingTodayTv, popularTv, topRatedTv, trendingTv } from '../constant'

function Tv() {
      
    return (
        <>
            <div className="cards__container">
                <h2>Popular</h2>
                <Cards type="tv" url={popularTv}/>
            </div>
            <div className="cards__container">
                <h2>Trending (this week)</h2>
                <Cards type="tv" url={trendingTv}/>
            </div>
            <div className="cards__container">
                <h2>Top Rating</h2>
                <Cards type="tv" url={topRatedTv}/>
            </div>
            <div className="cards__container">
                <h2>Airing Today</h2>
                <Cards type="tv" url={airingTodayTv}/>
            </div>
        </>
    )
}

export default Tv
