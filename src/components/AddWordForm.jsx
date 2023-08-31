import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const AddWordForm = ({ text, setText, addWord }) => {


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
					addWord()
					setText({ en: '', ru: '' })
				}}
			>
				Add word
			</MyButton>
		</form>
	)
}

export default AddWordForm
