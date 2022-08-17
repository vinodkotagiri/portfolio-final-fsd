import React from 'react'

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
                            <a className='nav-link active' href='/'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/about'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/skills'>Skills</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/portfolio'>Portfolio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
