import { useContext, useEffect, useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import { data } from '../data/data'
import Word from './Word'
import { GameContext } from '../context/context'

const Words = () => {
	const [text, setText] = useState({ enWord: '', ruWord: '' })
	const { words, setWords } = useContext(GameContext)

	const handleAddWord = (e) => {
		e.preventDefault()
		setWords([...words, { enWord: text.enWord, ruWord: text.ruWord }])
	}

	useEffect(() => {
		if(words.lenght)
		localStorage.setItem('words', JSON.stringify(words))
		
	}, [words])
	

	return (
		<>
			<h1 className="title">Dictionary</h1>
			<div className="dictionary">
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
				<br />
				{data.map((word) => (
						<Word key={word.en} en={word.en} ru={word.ru} />
				))}
			</div>
		</>
	)
}

export default Words
