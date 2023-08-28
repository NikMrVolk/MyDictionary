import React, { useContext } from 'react'
import { FiXSquare } from 'react-icons/fi'
import { LuFileSignature } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

const Word = ({ id, enWord, ruWord, setIdChangedWord, removeWord, setModalActive }) => {

	return (
		<div className="word__wrapper">
			<div className="word__content">
				<div>{enWord}</div>
				<div>{ruWord}</div>
			</div>
			<LuFileSignature
				onClick={() => {
					setIdChangedWord(id)
					setModalActive(true)
				}}
				className="word__icon word__info"
			/>
			<FiXSquare
				onClick={() => {
					removeWord(id)
				}}
				className="word__icon word__delete"
			/>
		</div>
	)
}

export default Word
