import React, { useContext, useRef, useState } from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import { data } from '../data/data'
import { GameContext } from '../context/context'
import { useNavigate } from 'react-router-dom'


const Game = () => {
	const { userName, game } = useContext(GameContext)
	const { words } = useContext(GameContext)
	const [text, setText] = useState('')
	const [random, setRandom] = useState(0)
	const inputRef = useRef()
	const navigate = useNavigate()

	const examination = (e) => {
		e.preventDefault()
		let searchedWord
		if (game === 'RU') {
			searchedWord = data[random].en
		} else if (game === 'EN') {
			searchedWord = data[random].ru
		}
		if (text === searchedWord) {
			console.log('good')
			setRandom(Math.floor(Math.random() * data.length))
			setText('')
			inputRef.current.focus()
		}
	}

	return (
		<div className="wrapper">
			<div className="title">Hello, {userName}, enter this word on english</div>
			<form onSubmit={examination}>
				<MyInput value={data[random][game.toLowerCase()]} readOnly />
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
			<MyButton onClick={() => { navigate('/words') }}>Change words</MyButton>
		</div>
	)
}

export default Game
