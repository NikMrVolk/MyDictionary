import { useContext, useState } from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/context'

const Start = () => {
	const navigate = useNavigate()
	const [name, setName] = useState()
	const modes = ['RU', 'EN']
	const { setUserName, setGame } = useContext(GameContext)

	const start = (name, mode) => {
		localStorage.setItem('userName', name)
		localStorage.setItem('game', mode)
		setUserName(name)
		setGame(mode)
		navigate('/game')
	}

	return (
		<div className="wrapper">
			<div>Enter your name and choose game</div>
			<MyInput
				type="text"
				placeholder="Enter name"
				value={name}
				onChange={(e) => {
					setName(e.target.value)
				}}
			/>
			<div>Choose game:</div>
			<div className="game__modes">
				{modes.map((mode) => (
					<MyButton
						key={mode}
						onClick={() => {
							start(name, mode)
						}}
					>
						{mode}
					</MyButton>
				))}
			</div>
		</div>
	)
}

export default Start
