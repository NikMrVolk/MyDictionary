import React from 'react'

const Word = ({ en, ru }) => {
	return (
		<div className="word__wrapper">
			<div>{en}</div>
			<div>{ru}</div>
		</div>
	)
}

export default Word
