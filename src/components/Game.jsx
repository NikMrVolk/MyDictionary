import React, { useContext, useEffect, useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'
import { GameContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import MyModal from './UI/modal/MyModal'
import StartGame from './StartGame'

const Game = () => {
	const { words } = useContext(GameContext)

	const modes = ['RU', 'EN']
	const [userName, setUserName] = useState('')
	const [game, setGame] = useState('')
	const [startGameModalActive, setStartGameModalActive] = useState(false)

	const [text, setText] = useState('')
	const [random, setRandom] = useState(0)
	const [searchedWord, setSearchedWord] = useState('')
	const [wordToTranslate, setWordToTranslate] = useState('')
	const navigate = useNavigate()

	const startGame = (name, mode) => {
		localStorage.setItem('userName', name)
		localStorage.setItem('game', mode)
		setUserName(name)
		setGame(mode)
	}

	useEffect(() => {
		setRandom(Math.floor(Math.random() * words.length))
		if (game === 'RU' && words.length) {
			setSearchedWord(words[random].enWord)
			setWordToTranslate(words[random].ruWord)
		} else if (game === 'EN' && words.length) {
			setSearchedWord(words[random].ruWord)
			setWordToTranslate(words[random].enWord)
		}
	}, [random, game])

	const examination = (e) => {
		e.preventDefault()
		if (text.trim() === searchedWord) {
			setRandom(Math.floor(Math.random() * words.length))
			setText('')
		}
	}

	useEffect(() => {
		if (!userName && localStorage.getItem('userName')) {
			setUserName(localStorage.getItem('userName'))
		}
		if (!game && localStorage.getItem('game')) {
			setGame(localStorage.getItem('game'))
		}
		setStartGameModalActive(true)
	}, [])

	return (
		<>
			<div className="wrapper">
				<div className="title">Hello, {userName}, translale this word</div>
				<form onSubmit={examination}>
					<MyInput value={wordToTranslate} readOnly />
					<MyInput
						type="text"
						placeholder="Enter text"
						value={text}
						onChange={(e) => {
							setText(e.target.value)
						}}
					/>
					<MyButton>Submit</MyButton>
				</form>
				<MyButton
					onClick={() => {
						navigate('/')
					}}
				>
					Dictionary
				</MyButton>
			</div>
			<MyModal active={startGameModalActive} setActive={setStartGameModalActive}>
				<StartGame
					name={userName}
					setName={setUserName}
					modes={modes}
					start={startGame}
					setModalActive={setStartGameModalActive}
				/>
			</MyModal>
		</>
	)
}

export default Game
