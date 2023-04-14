import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <ul className='navbar'>
                {/* <li> <Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li> */}
             
                {/* link replace with navlink */}
             
                <li> <NavLink className={"navbar-link"} to={"/"}>Home</NavLink></li>
                <li><NavLink className={"navbar-link"} to={"/about"}>About</NavLink></li>
                <li><NavLink className={"navbar-link"} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink className={"navbar-link"} to={"./filter"}>Filter</NavLink></li>



            </ul>
        </>
    )
}

export default NavBar
