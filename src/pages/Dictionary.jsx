import { useEffect, useState } from 'react'
import AddWordForm from '../components/AddWordForm'
import MyModal from '../components/UI/modal/MyModal'
import WordInfo from '../components/WordInfo'
import WordsManager from '../components/WordsManager'
import Words from '../components/Words'
import { useFetching } from '../hooks/useFetching'
import WordsServise from '../API/WordsServise'
import { useWords } from '../hooks/useWords'
import SearchWords from '../components/SearchWords'
import { getArrWithFirstWords, getCountPage } from '../utils/utils'
import { usePages } from '../hooks/usePages'

const Dictionary = () => {
	const [words, setWords] = useState([])
	const [addWordModalActive, setAddWordModalActive] = useState(false)
	const [changeWordModalActive, setChangeWordModalActive] = useState(false)
	const [idChangedWord, setIdChangedWord] = useState(0)
	const [text, setText] = useState({ en: '', ru: '' })
	const [search, setSearch] = useState({ sort: '', query: '' })
	const [totalPages, setTotalPages] = useState('')
	const [limit, setLimit] = useState('10')
	const [page, setPage] = useState('1')
	const myWords = useWords(words, search.sort, search.query)
	const pagesQty = usePages(totalPages)

	const [fetchWords, isWordsLoading, wordsError] = useFetching(async () => {
		const response = await WordsServise.getAll(limit, page)
		setWords(getArrWithFirstWords([...response.data]))
		const totalCount = response.headers['x-total-count']
		setTotalPages(getCountPage(totalCount, limit))
	})

	const handleAddWord = (newWord) => {
		setAddWordModalActive(false)
		setWords([...words, newWord])
	}

	const handleRemoveWord = (id) => {
		setWords(myWords.filter((word) => word.id !== id))
	}

	const handleRemoveWords = () => {
		setWords([])
	}

	const handleChangeWord = (id, enWord, ruWord) => {
		const index = myWords.findIndex((word) => word.id === +id)
		const newWord = { id: +id, title: enWord, body: ruWord }
		myWords.splice(index, 1, newWord)
		setWords(myWords)
		setChangeWordModalActive(false)
		setIdChangedWord(0)
	}

	useEffect(() => {
		fetchWords()
	}, [page])

	return (
		<>
			<h1 className="title">Dictionary</h1>
			<div className="dictionary">
				<WordsManager
					setModalActive={setAddWordModalActive}
					removeWords={handleRemoveWords}
				/>
				<br />
				<SearchWords search={search} setSearch={setSearch} />
				<br />
				<Words
					myWords={myWords}
					isWordsLoading={isWordsLoading}
					setModalActive={setChangeWordModalActive}
					setIdChangedWord={setIdChangedWord}
					removeWord={handleRemoveWord}
					error={wordsError}
					pagesQty={pagesQty}
					page={page}
					setPage={setPage}
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
