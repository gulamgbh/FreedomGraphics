import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ButtonComponents, DropdownComponents } from './global-components/Form.components';
import { useSelector } from 'react-redux';

function Navcomponent() {
    const User_Details = useSelector(state => state.userAuth);
    const cart = useSelector(state => state.cart);
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
                            {
                                User_Details.authenticate ? <DropdownComponents
                                    typ="button"
                                    cn="btn btn-block fs-5 fw-bold "
                                    dropdownname={User_Details.user.fullname}
                                    dropthree="Signout"

                                /> : <NavLink className="nav-link" to="signin">
                                    <ButtonComponents
                                        typ="button"
                                        cn="btn btn-block fs-5 fw-bold "
                                        btnname="Login"
                                    />
                                </NavLink>
                            }

                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link cart-trolley--link" to="cart">
                                <AiOutlineShoppingCart className='cart-trolley' />
                                <span className='cart-total--items'>
                                    <p style={{fontWeight:"bold", marginTop:'-3px'}}>
                                        {Object.keys(cart.cartItems).length}
                                    </p>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navcomponent
