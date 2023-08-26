import React, { useContext } from 'react'
import { FiXSquare } from "react-icons/fi";
import { GameContext } from '../context/context';

const Word = ({ id, enWord, ruWord}) => {
	const {handleRemoveWord} = useContext(GameContext)
	
	return (
		<div className="word__wrapper">
			<div className="word__content">
			<div>{enWord}</div>
			<div>{ruWord}</div>
			</div>
			<FiXSquare onClick={() => {handleRemoveWord(id)}} className='word__delete'/>
		</div>
	)
}

export default Word
