import MyLoader from './UI/loader/MyLoader'
import MyPagination from './UI/pagination/MyPagination'
import Word from './Word'

const Words = ({
	myWords,
	setModalActive,
	setIdChangedWord,
	removeWord,
	isWordsLoading,
	error,
	pagesQty,
	page,
	setPage,
}) => {
	return (
		<div>
			{error && 'Eror: ' + error}
			{isWordsLoading ? (
				<MyLoader />
			) : (
				<>
					{myWords.length ? (
						<>
							{myWords.map((word) => (
								<Word
									key={word.id}
									{...word}
									setModalActive={setModalActive}
									setIdChangedWord={setIdChangedWord}
									removeWord={removeWord}
								/>
							))}
							<MyPagination pagesQty={pagesQty} currentPage={page} setPage={setPage}/>
						</>
					) : (
						<>
							{!error && (
								<div style={{ textAlign: 'center' }}>
									You haven't words in your dictionary
								</div>
							)}
						</>
					)}
				</>
			)}
		</div>
	)
}

export default Words
