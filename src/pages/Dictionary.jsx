import { useContext, useEffect, useState } from 'react'
import AddWordForm from '../components/AddWordForm'
import MyModal from '../components/UI/modal/MyModal'
import Word from '../components/Word'
import { GameContext } from '../context/context'
import WordInfo from '../components/WordInfo'
import WordsManager from '../components/WordsManager'

const Dictionary = () => {
	const { words, setWords } = useContext(GameContext)
	const [addWordModalActive, setAddWordModalActive] = useState(false)
	const [changeWordModalActive, setChangeWordModalActive] = useState(false)
	const [idChangedWord, setIdChangedWord] = useState(0)

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
				<WordsManager
					setModalActive={setAddWordModalActive}
					removeWords={handleRemoveWords}
				/>
				<br />
				{words.length ? (
					words.map((word) => (
						<Word
							key={word.id}
							{...word}
							setModalActive={setChangeWordModalActive}
							setIdChangedWord={setIdChangedWord}
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
				<WordInfo
					words={words}
					id={idChangedWord}
					changeWord={handleChangeWord}
				/>
			</MyModal>
		</>
	)
}

export default Dictionary
