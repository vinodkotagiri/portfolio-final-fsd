import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Hero from './component.hero'
import About from './component.about'
import Skills from './component.skills'
import Portfolio from './component.portfolio'
import Contact from './component.contact'
const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes