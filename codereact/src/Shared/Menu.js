import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Menu() {
    const { pathname } = useLocation();

    return (
        <div style={{marginBottom:'1rem'}}>
            <div className="tabs">
                <ul>
                    <li className={pathname === '/tv' ? 'is-active' : ''}><Link to="/tv">TV Series</Link></li>
                    <li className={pathname === '/movies' ? 'is-active' : ''}><Link to="/movies">Movies</Link></li>
                    <li><a>Animes</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
