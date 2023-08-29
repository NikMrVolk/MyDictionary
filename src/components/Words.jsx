import Word from "./Word"

const Words = ({ myWords, setModalActive, setIdChangedWord, removeWord }) => {
	return (
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
	)
}

export default Words
