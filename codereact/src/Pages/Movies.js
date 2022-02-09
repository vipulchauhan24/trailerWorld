import React from 'react'
import Cards from '../Cards/Cards'
import { popularMovie, topRatedMovie, trendingMovie } from '../constant'

function Movies() {
    return (
        <>
            <div className="cards__container">
                <h2>Popular</h2>
                <Cards type="movie" url={popularMovie}/>
            </div>
            <div className="cards__container">
                <h2>Trending (this week)</h2>
                <Cards type="movie" url={trendingMovie}/>
            </div>
            <div className="cards__container">
                <h2>Top Rating</h2>
                <Cards type="movie" url={topRatedMovie}/>
            </div>
        </>
    )
}

export default Movies
