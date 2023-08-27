import { useNavigate, useParams } from 'react-router-dom'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import { GameContext } from '../context/context'
import { useContext, useEffect, useState } from 'react'

const WordInfo = ({}) => {
	const navigate = useNavigate()
	const { wordInfo } = useParams()
	const { words, handleChangeWord} = useContext(GameContext)
	const [text, setText] = useState({ en: '', ru: '' })

	useEffect(() => {
		if (words.length) {
			const [myWord] = words.filter((word) => word.id === +wordInfo)
			setText({ en: myWord.enWord, ru: myWord.ruWord })
		}
	}, [])

	return (
		<div className="word-info__wrapper">
			<div className="word-info__body">
				<MyInput
					type="text"
					value={text.en}
					onChange={(e) => {
						setText({ ...text, en: e.target.value })
					}}
				/>
				<MyInput
					type="text"
					value={text.ru}
					onChange={(e) => {
						setText({ ...text, ru: e.target.value })
					}}
				/>
				<MyButton
					onClick={() => {
						handleChangeWord(wordInfo, text.en, text.ru)
						navigate('/words')
						
					}}
				>
					Save
				</MyButton>
			</div>
		</div>
	)
}

export default WordInfo
