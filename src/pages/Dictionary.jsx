import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import AddWordForm from '../components/AddWordForm'
import MyModal from '../components/UI/modal/MyModal'
import Word from '../components/Word'
import { GameContext } from '../context/context'
import WordInfo from '../components/WordInfo'

const Dictionary = () => {
	const { words, setWords } = useContext(GameContext)
	const [addWordModalActive, setAddWordModalActive] = useState(false)
	const [changeWordModalActive, setChangeWordModalActive] = useState(false)
	const [idChangedWord, setIdChangedWord] = useState(0)
	const navigate = useNavigate()

	const handleAddWord = (addedWord) => {
		setWords([...words, addedWord])
		setAddWordModalActive(false)
	}

	const handleRemoveWord = (id) => {
		setWords(words.filter((word) => word.id !== id))
		localStorage.setItem('words', JSON.stringify(words))
	}

	const handleRemoveWords = () => {
		localStorage.removeItem('words')
		setWords([])
	}

	const handleChangeWord = (id, enWord, ruWord) => {
		const index = words.findIndex((word) => word.id === +id)
		const newWord = { id: +id, enWord: enWord.trim(), ruWord: ruWord.trim() }
		words.splice(index, 1, newWord)
		setWords(words)
		setChangeWordModalActive(false)
		setIdChangedWord(0)
	}

	useEffect(() => {
		if (!words.length && localStorage.getItem('words')) {
			setWords(JSON.parse(localStorage.getItem('words')))
		}
	}, [])

	useEffect(() => {
		if (words.length) localStorage.setItem('words', JSON.stringify(words))
	}, [words])

	return (
		<>
			<h1 className="title">Dictionary</h1>
			<div className="dictionary">
				<MyButton
					onClick={() => {
						setAddWordModalActive(true)
					}}
				>
					Add word
				</MyButton>
				<MyButton
					disabled
					onClick={(e) => {
						e.preventDefault()
						handleRemoveWords()
					}}
				>
					Remove all words
				</MyButton>
				<MyButton
					onClick={() => {
						navigate('/game')
					}}
				>
					Game
				</MyButton>
				<br />
				{words.length ? (
					words.map((word) => (
						<Word
							key={word.id}
							{...word}
							setModalActive = {setChangeWordModalActive}
							setIdChangedWord = { setIdChangedWord }
							removeWord={handleRemoveWord}
						/>
					))
				) : (
					<div style={{ textAlign: 'center' }}>
						You haven't words in your dictionary
					</div>
				)}
			</div>
			<MyModal active={addWordModalActive} setActive={setAddWordModalActive}>
				<AddWordForm
					addWord={handleAddWord}
					setAddWordModalActive={setAddWordModalActive}
				/>
			</MyModal>
			<MyModal
				active={changeWordModalActive}
				setActive={setChangeWordModalActive}
			>
				<WordInfo words={words} id={idChangedWord} changeWord={handleChangeWord} />
			</MyModal>
		</>
	)
}

export default Dictionary
