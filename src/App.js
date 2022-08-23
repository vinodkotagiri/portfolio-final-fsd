import React from 'react'


import Navbar from './components/Navbar/component.navbar'
import Home from './components/Homepage/component.home'
import About from './components/Aboutpage/component.about'
import Skills from './components/Skillspage/component.skills'
import { Routes, Route } from 'react-router'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App