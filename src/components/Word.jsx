import React, { useContext } from 'react'
import { FiXSquare } from 'react-icons/fi'
import { LuFileSignature } from 'react-icons/lu'
import { GameContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const Word = ({ id, enWord, ruWord }) => {
	const { handleRemoveWord } = useContext(GameContext)
	const navigate = useNavigate()

	return (
		<div className="word__wrapper">
			<div className="word__content">
				<div>{enWord}</div>
				<div>{ruWord}</div>
			</div>
			<LuFileSignature
				onClick={() => {
					navigate(`/words/${id}`)
				}}
				className="word__icon word__info"
			/>
			<FiXSquare
				onClick={() => {
					handleRemoveWord(id)
				}}
				className="word__icon word__delete"
			/>
		</div>
	)
}

export default Word
