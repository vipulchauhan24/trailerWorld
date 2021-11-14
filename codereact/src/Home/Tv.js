import React from 'react'
import Cards from '../Cards/Cards'
import { airingTodayTv, popularTv, topRatedTv, trendingTv } from '../constant'

function Tv() {
      
    return (
        <div>
            <div className="cards__container">
                <h2>Popular</h2>
                <Cards url={popularTv}/>
            </div>
            <div className="cards__container">
                <h2>Trending (this week)</h2>
                <Cards url={trendingTv}/>
            </div>
            <div className="cards__container">
                <h2>Top Rating</h2>
                <Cards url={topRatedTv}/>
            </div>
            <div className="cards__container">
                <h2>Airing Today</h2>
                <Cards url={airingTodayTv}/>
            </div>
        </div>
    )
}

export default Tv
