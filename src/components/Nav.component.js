import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
function Navcomponent() {
    return (
        <>
            <div className="d-flex">
                <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 font fs-5 fw-900">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="products">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">
                                <button type="button" >Login</button>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link cart-trolley--link" to="cart">
                                <AiOutlineShoppingCart className='cart-trolley' />
                                <span className='cart-total--items'>10</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navcomponent
