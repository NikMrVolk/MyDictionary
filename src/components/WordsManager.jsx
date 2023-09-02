import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const WordsManager = ({ setModalActive, removeWords }) => {
	const navigate = useNavigate()

	return (
		<>
			<MyButton
				onClick={() => {
					setModalActive(true)
				}}
			>
				Add word
			</MyButton>
			<MyButton
				onClick={(e) => {
					e.preventDefault()
					removeWords()
				}}
			>
				Remove all words
			</MyButton>
			<MyButton
				disabled
				onClick={() => {
					navigate('/game')
				}}
			>
				Game
			</MyButton>
		</>
	)
}

export default WordsManager
