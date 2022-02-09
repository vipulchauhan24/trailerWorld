import React from 'react'
import Home from './Home/Home'
import Sidebar from './Shared/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Discover from './Discover/Discover'
import Nomatch from './404/Nomatch'
import Movies from './Pages/Movies'
import Tv from './Pages/Tv'
import TvDetails from './Pages/TV.details'
function Layout() {
    return (
        <div className="is-flex is-align-content-flex-start">
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="tv" element={<Tv />}/>
                    <Route path="movies" element={<Movies />}/>
                </Route>
                <Route path="/discover" element={<Discover />}/>
                <Route path="/tv/:id" element={<TvDetails />}/>
                <Route path="*" element={<Nomatch />}/>
            </Routes>
        </div>
    )
}

export default Layout
