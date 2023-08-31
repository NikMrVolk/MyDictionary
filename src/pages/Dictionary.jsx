import { useContext, useEffect, useState } from 'react'
import AddWordForm from '../components/AddWordForm'
import MyModal from '../components/UI/modal/MyModal'
import { GameContext } from '../context/context'
import WordInfo from '../components/WordInfo'
import WordsManager from '../components/WordsManager'
import MySelect from '../components/UI/select/MySelect'
import Words from '../components/Words'
import { useFetching } from '../hooks/useFetching'
import WordsServise from '../API/WordsServise'

const Dictionary = () => {
	const { words, setWords } = useContext(GameContext)
	const [addWordModalActive, setAddWordModalActive] = useState(false)
	const [changeWordModalActive, setChangeWordModalActive] = useState(false)
	const [idChangedWord, setIdChangedWord] = useState(0)
	const [sort, setSort] = useState('')
	const options = [
		{ value: 'enWord', name: 'English' },
		{ value: 'ruWord', name: 'Russian' },
	]

	const [fetchWords, isLoading, wordsError] = useFetching(async () => {
		const response = await WordsServise.getAll()
		console.log(response.data)
	})

	const sortedWords = (words, sort) => {
		if (sort) {
			return [...words].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return words
	}

	const myWords = sortedWords(words, sort)

	const handleAddWord = (addedWord) => {
		setWords([...words, addedWord])
		setAddWordModalActive(false)
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

	useEffect(() => {
		if (words.length) {
			localStorage.setItem('words', JSON.stringify(myWords))
		} 
	}, [myWords])

	useEffect(() => {
		const data = localStorage.getItem('words')
		if (data && data.length) {
			setWords(JSON.parse(data))
		}
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
					setModalActive={setChangeWordModalActive}
					setIdChangedWord={setIdChangedWord}
					removeWord={handleRemoveWord}
				/>
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
