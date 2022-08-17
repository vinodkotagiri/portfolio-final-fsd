import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Hero, Navbar, About, Skills, Portfolio, Contact } from './components'
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </div>
    )
}

export default App