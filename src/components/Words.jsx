import { useContext, useEffect, useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import Word from './Word'
import { GameContext } from '../context/context'
import MyModal from './UI/modal/MyModal'
import AddWordForm from './AddWordForm'

const Words = () => {
	const { words, setWords } = useContext(GameContext)
	const [modalActive, setModalActive] = useState(false)

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
				<MyButton
					onClick={() => {
						setModalActive(true)
					}}
				>
					Add word
				</MyButton>
				<MyButton
					disabled
					onClick={(e) => {
						handleRemoveWords(e)
					}}
				>
					Remove all words
				</MyButton>
				<br />
				{words.length ? (
					words.map((word) => <Word key={word.id} {...word} />)
				) : (
					<div style={{ textAlign: 'center' }}>
						You haven't words in your dictionary
					</div>
				)}
			</div>
			<MyModal active={modalActive} setActive={setModalActive}>
				<AddWordForm setModalActive={setModalActive} />
			</MyModal>
		</>
	)
}

export default Words
