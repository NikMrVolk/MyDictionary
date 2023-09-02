import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const AddWordForm = ({ text, setText, addWord }) => {
	const newWord = {
		id: Date.now(),
		title: text.en,
		body: text.ru,
	}

	return (
		<form className="add-form">
			<MyInput
				type="text"
				placeholder="Enter english word"
				value={text.en}
				onChange={(e) => setText({ ...text, en: e.target.value })}
			/>
			<MyInput
				type="text"
				placeholder="Enter russian word"
				value={text.ru}
				onChange={(e) => setText({ ...text, ru: e.target.value })}
			/>
			<MyButton
				onClick={(e) => {
					e.preventDefault()
					addWord(newWord)
					setText({ en: '', ru: '' })
				}}
			>
				Add word
			</MyButton>
		</form>
	)
}

export default AddWordForm
