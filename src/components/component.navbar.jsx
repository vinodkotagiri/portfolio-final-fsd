import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-primary navbar-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand'
                    href='/'
                >Vinod Kotagiri</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 px-4'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link ' >Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-link' >About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/skills' className='nav-link' >Skills</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/portfolio' className='nav-link' >Portfolio</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/contact' className='nav-link' >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
