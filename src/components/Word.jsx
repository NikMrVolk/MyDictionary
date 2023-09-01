import { FiXSquare } from 'react-icons/fi'
import { LuFileSignature } from 'react-icons/lu'

const Word = ({ id, author, text, setIdChangedWord, removeWord, setModalActive }) => {

	return (
		<div className="word__wrapper">
			<div className="word__content">
				<div>{text}</div>
				<div>{author.name}</div>
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
