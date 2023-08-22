import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillBell } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const Admin_Details = useSelector(state => state.adminAuth);
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top  border-bottom">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars />
                    </button>

                    {/* <!-- Brand --> */}
                    <NavLink className="navbar-brand" to="/">
                        <img src="./fgAdmin.png" height="25" alt="freedom graphics logo" loading="lazy" />
                    </NavLink>

                    {/* <!-- Avatar --> */}
                    
                    <div className="dropdown">
                        <NavLink className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
                                height="30" alt="Avatar" loading="lazy" />
                            <span className='text-uppercase p-2'>{Admin_Details.user.fullname}</span>
                        </NavLink>
                        <ul className="dropdown-menu mt-2" style={{ minWidth: "11.5rem" }} aria-labelledby="dropdownMenuLink">
                            <li><NavLink className="collapse-item text-decoration-none text-white" href="#">Profile</NavLink></li>
                            <li><NavLink className="collapse-item text-decoration-none text-white" href="#">Signout</NavLink></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </>
    )
}

export default Navbar