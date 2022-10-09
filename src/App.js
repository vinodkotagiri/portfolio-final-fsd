import React from 'react'

import Appbar from './components/component.appbar'
import Hero from './components/component.hero'
import About from './components/component.about'
import Skills from './components/component.skills'
import Portfolio from './components/component.portfolio'
import Contact from './components/component.contact'
import { Route, Routes } from 'react-router-dom'

const App = () => (
	<Routes>
		<Route path='/' element={<Appbar />}>
			<Route index element={<Hero />} />
			<Route path='about' element={<About />} />
			<Route path='skills' element={<Skills />} />
			<Route path='portfolio' element={<Portfolio />} />
			<Route path='contact' element={<Contact />} />
		</Route>
	</Routes>
)

export default App
