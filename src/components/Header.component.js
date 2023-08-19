import React from 'react'
import { NavLink } from 'react-router-dom'
import Navcomponent from './Nav.component'

function Headercomponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid" >
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <img src='./logo.png' alt='logo' />
                    </NavLink>
                    <Navcomponent />
                </div>
            </nav>
        </>
    )
}

export default Headercomponent

