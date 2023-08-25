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
		setWords([...words, { id: words.length + 1, enWord: text.enWord, ruWord: text.ruWord }])
	}

	const handleRemoveWords = (e) => {
		e.preventDefault()
		localStorage.removeItem('words')
		setWords([])
	}

	useEffect(() => {
		if (words.length) localStorage.setItem('words', JSON.stringify(words))
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
					<MyButton onClick={(e) => {handleRemoveWords(e)}}>Remove all words</MyButton>
				</form>
				<br />
				{words.length ? words.map((word) => (
					<Word key={word.id} en={word.enWord} ru={word.ruWord} />
				)): <div style={{textAlign: 'center'}}>You haven't words in your dictionary</div>}
			</div>
		</>
	)
}

export default Words
