import { Route, Routes } from 'react-router-dom'
import Game from './Game'
import Start from './Start'
import Words from './Words'
import WordInfo from './WordInfo'
import Word from './Word'

const AppRouters = () => {
	return (
		<Routes>
			<Route path="/" element={<Start />} />
			<Route path="/words" element={<Words />} />
			<Route path="/word" element={<Word />} />
			<Route path="/words/:wordInfo" element={<WordInfo />} />
			<Route path="*" element={<Game />} />
		</Routes>
	)
}

export default AppRouters
