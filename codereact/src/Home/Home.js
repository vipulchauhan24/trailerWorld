import React, { useEffect } from 'react'
import { Route, Routes,useNavigate,useLocation } from 'react-router-dom'
import Movies from './Movies'
import Tv from './Tv'
import Menu from './Menu'

function Home() {
    let navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if(pathname === "/"){
            navigate("/tv")
        }
    })
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="tv" element={<Tv />}/>
                <Route path="movies" element={<Movies />}/>
            </Routes>
        </div>
    )
}

export default Home
