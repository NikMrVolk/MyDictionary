import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"

const GameForm = ({ text, setText, examination, wordToTranslate }) => {

	return (
		<form onSubmit={examination}>
			<MyInput value={wordToTranslate} readOnly />
			<MyInput
				type="text"
				placeholder="Enter text"
				value={text}
				onChange={(e) => {
					setText(e.target.value)
				}}
			/>
			<MyButton>Submit</MyButton>
		</form>
	)
}

export default GameForm
