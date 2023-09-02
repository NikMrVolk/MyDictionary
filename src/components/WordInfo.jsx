import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import { useEffect, useState } from 'react'

const WordInfo = ({ words, id, changeWord }) => {
	const [text, setText] = useState({ en: '', ru: '' })

	useEffect(() => {
		if (words.length && id) {
			const [myWord] = words.filter((word) => word.id === id)
			setText({ en: myWord.title.split(' ')[0], ru: myWord.body.split(' ')[0] })
		}
	}, [id])

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
						changeWord(id, text.en, text.ru)
					}}
				>
					Save
				</MyButton>
			</div>
		</div>
	)
}

export default WordInfo
