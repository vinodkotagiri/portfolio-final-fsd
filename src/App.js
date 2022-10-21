import React from 'react'
import Appbar from './components/component.appbar'
import Hero from './components/component.hero'
import About from './components/component.about'
import Skills from './components/component.skills'
import Portfolio from './components/component.portfolio'
import Contact from './components/component.contact'
import Blog from './components/component.blog'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
const App = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Appbar />}>
					<Route index element={<Hero />} />
					<Route path='*' element={<Navigate to='/' />} />
					<Route path='about' element={<About />} />
					<Route path='skills' element={<Skills />} />
					<Route path='portfolio' element={<Portfolio />} />
					<Route path='contact' element={<Contact />} />
					<Route path='blog' element={<Blog />} />
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default App
