import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/component.navbar'
import HomePage from './components/component.homepage'
const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbar />} >
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App