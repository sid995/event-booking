import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/auth-context'
import './MainNavigation.css'

const MainNavigation = props => {
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <header className="main-navigation">
            <div className="main-navigation__logo">
              <h1>Event Booker</h1>
            </div>
            <nav className="main-navigation__items">
              <ul>
                {!context.token && (
                  <li>
                    <NavLink to="/auth">Authentication</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/events">Events</NavLink>
                </li>
                {context.token && (
                  <Fragment>
                    <li>
                      <NavLink to="/bookings">Bookings</NavLink>
                    </li>
                    <li>
                      <button onClick={context.logout}>Logout</button>
                    </li>
                  </Fragment>
                )}
              </ul>
            </nav>
          </header>
        )
      }}
    </AuthContext.Consumer>
  )
}

export default MainNavigation
