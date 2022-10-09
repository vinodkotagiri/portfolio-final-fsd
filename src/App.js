import React from 'react'

import Appbar from './components/component.appbar'
import Hero from './components/component.hero'
import { Route, Routes } from 'react-router-dom'

const App = () => (
	<Routes>
		<Route path='/' element={<Appbar />}>
			<Route index element={<Hero />} />
		</Route>
	</Routes>
)

export default App
