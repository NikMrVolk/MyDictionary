import { Route, Routes } from 'react-router-dom'
import Game from './Game'
import Dictionary from '../pages/Dictionary'
import About from '../pages/About'

const AppRouters = () => {

	return (
		<Routes>
			<Route path="/dictionary" element={<Dictionary />} />
			<Route path="/game" element={<Game />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Dictionary />} />
		</Routes>
	)
}

export default AppRouters
