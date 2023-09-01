import { useContext, useEffect, useState } from 'react'
import AddWordForm from '../components/AddWordForm'
import MyModal from '../components/UI/modal/MyModal'
import WordInfo from '../components/WordInfo'
import WordsManager from '../components/WordsManager'
import MySelect from '../components/UI/select/MySelect'
import Words from '../components/Words'
import { useFetching } from '../hooks/useFetching'
import WordsServise from '../API/WordsServise'

const Dictionary = () => {
	const [words, setWords] = useState([])
	const [addWordModalActive, setAddWordModalActive] = useState(false)
	const [changeWordModalActive, setChangeWordModalActive] = useState(false)
	const [idChangedWord, setIdChangedWord] = useState(0)
	const [sort, setSort] = useState('')
	const options = [
		{ value: 'enWord', name: 'English' },
		{ value: 'ruWord', name: 'Russian' },
	]

	const [fetchWords, isWordsLoading, wordsError] = useFetching(async () => {
		const response = await WordsServise.getAll()
		setWords([...response.data.comments])
	})

	const [text, setText] = useState({ en: '', ru: '' })
	const [fetchAddWord] = useFetching(
		async () => {
			await WordsServise.addWord(text.en, text.ru)
			const response = await WordsServise.getAll()
			setWords([...response.data.comments])
		}
	)

	const sortedWords = (words, sort) => {
		if (sort) {
			return [...words].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return words
	}

	const myWords = sortedWords(words, sort)

	const handleAddWord = () => {
		fetchAddWord()
		setAddWordModalActive(false)
		fetchWords()
	}

	const handleRemoveWord = (id) => {
		setWords(myWords.filter((word) => word.id !== id))
	}

	const handleRemoveWords = () => {
		localStorage.removeItem('words')
		setWords([])
	}

	const handleChangeWord = (id, enWord, ruWord) => {
		const index = myWords.findIndex((word) => word.id === +id)
		const newWord = { id: +id, enWord: enWord.trim(), ruWord: ruWord.trim() }
		myWords.splice(index, 1, newWord)
		setWords(myWords)
		setChangeWordModalActive(false)
		setIdChangedWord(0)
		if (myWords.length) localStorage.setItem('words', JSON.stringify(myWords))
	}

	useEffect(() => {}, [myWords])

	useEffect(() => {
		fetchWords()
	}, [])

	return (
		<>
			<h1 className="title">Dictionary</h1>
			<div className="dictionary">
				<WordsManager
					setModalActive={setAddWordModalActive}
					removeWords={handleRemoveWords}
				/>
				<br />
				<MySelect
					sort={sort}
					setSort={setSort}
					defaultValue={'Sorted by'}
					options={options}
				/>
				<br />
				<Words
					myWords={myWords}
					isWordsLoading={isWordsLoading}
					setModalActive={setChangeWordModalActive}
					setIdChangedWord={setIdChangedWord}
					removeWord={handleRemoveWord}
				/>
			</div>
			<MyModal active={addWordModalActive} setActive={setAddWordModalActive}>
				<AddWordForm
					text={text}
					setText={setText}
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
