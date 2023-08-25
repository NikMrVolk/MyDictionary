import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { GameContext } from './context/context'
import AppRouters from './components/AppRouters'

function App() {
	const [userName, setUserName] = useState('')
	const [game, setGame] = useState('')
	const [words, setWords] = useState([])

	// useEffect(() => {
	// 	if (!words.length) {
	// 		setWords(JSON.parse(localStorage.getItem('words')))
	// 	}
	// }, [])

	return (
		<GameContext.Provider value={{ userName, setUserName, game, setGame, words, setWords }}>
			<BrowserRouter>
				<div className="App">
					<AppRouters />
				</div>
			</BrowserRouter>
		</GameContext.Provider>
	)
}

export default App
