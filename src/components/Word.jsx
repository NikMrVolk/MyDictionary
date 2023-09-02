import { FiXSquare } from 'react-icons/fi'
import { LuFileSignature } from 'react-icons/lu'

const Word = ({
	id,
	title,
	body,
	setIdChangedWord,
	removeWord,
	setModalActive,
}) => {
	return (
		<div className="word">
			<div className="word__content">
				<div>{title.split(' ')[0]}</div>
				<div>{body.split(' ')[0]}</div>
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
