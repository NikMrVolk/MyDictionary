import axios from 'axios'

const address = 'https://wedev-api.sky.pro/api/v1/nick1/comments'

export default class WordsServise {
	static async getAll() {
		const response = await axios.get(address)
		return response
	}

	static async addWord(ru, en) {
		const response = await axios.post(
			address,
			JSON.stringify({ text: ru, name: en }),
			{
				headers: {
					'Content-Type': 'charset=utf-8',
				},
			}
		)
		return response
	}
}
