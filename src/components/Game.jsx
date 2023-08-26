import React, { useContext, useEffect, useRef, useState } from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import { GameContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const Game = () => {
	const { userName, game, words } = useContext(GameContext)

	const [wordToTranslate, setWordToTranslate] = useState('')
	const [searchedWord, setSearchedWord] = useState('')
	const [text, setText] = useState('')
	const [random, setRandom] = useState(1)

	const inputRef = useRef()
	const navigate = useNavigate()

	useEffect(() => {
		setRandom(Math.floor(Math.random() * words.length))
		if (game === 'RU' && words.length) {
			setSearchedWord(words[random].enWord)
			setWordToTranslate(words[random].ruWord)
		} else if (game === 'EN' && words.length) {
			setSearchedWord(words[random].ruWord)
			setWordToTranslate(words[random].enWord)
		}
	}, [random, game, words])

	const examination = (e) => {
		e.preventDefault()
		if (text === searchedWord) {
			console.log('good')
			setRandom(Math.floor(Math.random() * words.length))
			setText('')
			inputRef.current.focus()
		}
	}

	const getWordToTranslate = (langWord) => {
		const wordToTranslate = words[random].langWord
		return wordToTranslate
	}

	return (
		<div className="wrapper">
			<div className="title">Hello, {userName}, translale this word</div>
			<form onSubmit={examination}>
				<MyInput value={wordToTranslate} readOnly />
				<MyInput
					ref={inputRef}
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
					navigate('/words')
				}}
			>
				Change words
			</MyButton>
		</div>
	)
}

export default Game
