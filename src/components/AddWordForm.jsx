import { useContext, useState } from 'react'
import { GameContext } from '../context/context'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const AddWordForm = ({ setModalActive }) => {
	const { words, setWords } = useContext(GameContext)
	const [text, setText] = useState({ enWord: '', ruWord: '' })

	const handleAddWord = (e) => {
		e.preventDefault()
		setWords([
			...words,
			{
				id: Date.now(),
				enWord: text.enWord.trim(),
				ruWord: text.ruWord.trim(),
			},
		])
		setModalActive(false)
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
			<MyButton onClick={handleAddWord}>Add word</MyButton>
		</form>
	)
}

export default AddWordForm
