import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
			{isWordsLoading && <MyLoader />}
			{myWords.length ? (
				<>
					<TransitionGroup>
						{myWords.map((word) => (
							<CSSTransition key={word.id} timeout={500} classNames="word">
							<Word
								{...word}
								setModalActive={setModalActive}
								setIdChangedWord={setIdChangedWord}
								removeWord={removeWord}
							/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</>
			) : (
				<>
					{!error && !isWordsLoading && (
						<div style={{ textAlign: 'center' }}>
							You haven't words in your dictionary
						</div>
					)}
				</>
			)}
			<MyPagination
				pagesQty={pagesQty}
				currentPage={page}
				setPage={setPage}
			/>
		</div>
	)
}

export default Words
