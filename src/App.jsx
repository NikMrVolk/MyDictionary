import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { GameContext } from './context/context'
import AppRouters from './components/AppRouters'

function App() {
	const [userName, setUserName] = useState('')
	const [game, setGame] = useState('')
	const [words, setWords] = useState([])

	const handleRemoveWord = (id) => {
		setWords(words.filter((word) => word.id !== id))
		localStorage.setItem('words', JSON.stringify(words))
	}

	const handleChangeWord = (id, enWord, ruWord) => {
		const index = words.findIndex(word => word.id === +id)
		const newWord = {id: +id, enWord: enWord.trim(), ruWord: ruWord.trim()}
		words.splice(index, 1, newWord)
		setWords(words)
	}

	useEffect(() => {
		if (!words.length && localStorage.getItem('words')) {
			setWords(JSON.parse(localStorage.getItem('words')))
		}
		if (!userName && localStorage.getItem('userName')) {
			setUserName(localStorage.getItem('userName'))
		}
		if (!game && localStorage.getItem('game')) {
			setGame(localStorage.getItem('game'))
		}
	}, [])

	return (
		<GameContext.Provider
			value={{
				userName,
				setUserName,
				game,
				setGame,
				words,
				setWords,
				handleRemoveWord,
				handleChangeWord,
			}}
		>
			<BrowserRouter>
				<div className="App">
					<AppRouters />
				</div>
			</BrowserRouter>
		</GameContext.Provider>
	)
}

export default App
