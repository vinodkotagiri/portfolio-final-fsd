import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/component.navbar'
import HomePage from './components/component.homepage'
import AboutPage from './components/component.aboutpage.jsx'
import SkillsPage from './components/component.skillspage.jsx'
import PortfolioPage from './components/component.portfoliopage.jsx'
import ContactPage from './components/component.contactpage.jsx'
const App = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Navbar />} >
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='skills' element={<SkillsPage />} />
                    <Route path='portfolio' element={<PortfolioPage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App