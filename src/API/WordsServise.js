import axios from 'axios'

const address = 'https://jsonplaceholder.typicode.com/posts'

export default class WordsServise {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get(address, {
			params: {
				_limit: limit,
				_page: page,
			},
		})
		return response
	}
	// If API can handle add new words
	// static async addWord(ru, en) {
	// 	const response = await axios.post(
	// 		address,
	// 		JSON.stringify({ text: ru, name: en }),
	// 		{
	// 			headers: {
	// 				'Content-Type': 'charset=utf-8',
	// 			},
	// 		}
	// 	)
	// 	return response
	// }
}
