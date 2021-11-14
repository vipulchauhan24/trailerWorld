import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Sidebar() {
    const { pathname } = useLocation();

    return (
        <div className="sidebar__home">
            <aside className="menu">
            <p className="menu-label">
                Menu
            </p>
            <ul className="menu-list">
                <li><Link to="/" className={pathname === '/tv' ? 'is-active' : ''}><ion-icon name="home-sharp"></ion-icon>Home</Link></li>
                <li><Link to="/discover" className={pathname === '/discover' ? 'is-active' : ''}><ion-icon name="film-sharp"></ion-icon>Discover</Link></li>
                <li><ion-icon name="information-sharp"></ion-icon>Coming soon</li>
            </ul>
            </aside>
        </div>
    )
}

export default Sidebar
