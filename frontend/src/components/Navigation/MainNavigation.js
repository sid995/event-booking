import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainNavigation.css'

const MainNavigation = props => {
  return (
    <header className="main-navigation">
      <div className="main-naviation__logo">
        <h1>Event Booker</h1>
      </div>
      <nav className="main-navigation__items">
        <ul>
          <li>
            <NavLink to="/auth">Authentication</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/bookings">Bookings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
