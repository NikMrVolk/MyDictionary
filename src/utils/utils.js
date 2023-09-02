export const getArrWithFirstWords = (arr) => {
	const newArr = arr.map((word) => {
		const title = word.title.split(' ').splice(0, 1).join('')
		const body = word.body.split(' ').splice(0, 1).join('')
		return { ...word, title: title, body: body }
	})
	return newArr
}
