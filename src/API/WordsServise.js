import axios from 'axios'

const address = 'https://wedev-api.sky.pro/api/v2/nick/comments'

export default class WordsServise {
	static async getAll() {
		const response = await axios.get(address)
		return response
	}
}
