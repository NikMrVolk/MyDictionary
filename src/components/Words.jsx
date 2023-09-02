import MyLoader from './UI/loader/MyLoader'
import Word from './Word'

const Words = ({
	myWords,
	setModalActive,
	setIdChangedWord,
	removeWord,
	isWordsLoading,
}) => {
	return (
		<div>
			{isWordsLoading ? (
				<MyLoader />
			) : (
				<>
					{myWords.length ? (
						myWords.map((word) => (
							<Word
								key={word.id}
								{...word}
								setModalActive={setModalActive}
								setIdChangedWord={setIdChangedWord}
								removeWord={removeWord}
							/>
						))
					) : (
						<div style={{ textAlign: 'center' }}>
							You haven't words in your dictionary
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default Words
