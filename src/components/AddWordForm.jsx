import { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const AddWordForm = ({ addWord }) => {
	const [text, setText] = useState({ enWord: '', ruWord: '' })
	const newWord = {
		id: Date.now(),
		enWord: text.enWord.trim(),
		ruWord: text.ruWord.trim(),
	}

	return (
		<form className="add-form">
			<MyInput
				type="text"
				placeholder="Enter english word"
				value={text.enWord}
				onChange={(e) => setText({ ...text, enWord: e.target.value })}
			/>
			<MyInput
				type="text"
				placeholder="Enter russian word"
				value={text.ruWord}
				onChange={(e) => setText({ ...text, ruWord: e.target.value })}
			/>
			<MyButton
				onClick={(e) => {
					e.preventDefault()
					addWord(newWord)
					setText({ enWord: '', ruWord: '' })
				}}
			>
				Add word
			</MyButton>
		</form>
	)
}

export default AddWordForm
