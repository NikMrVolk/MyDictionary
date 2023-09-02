import { useMemo } from 'react'

export const useSortedWords = (words, sort) => {
	const sortedWords = useMemo(() => {
		if (sort) {
			return [...words].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return words
	}, [words, sort])
	return sortedWords
}

export const useWords = (words, sort, query) => {
	const sortedWords = useSortedWords(words, sort)
	const sortedAndSearchedWords = useMemo(() => {
		return sortedWords.filter(
			(word) =>
				word.title.toLowerCase().includes(query.toLowerCase()) ||
				word.body.toLowerCase().includes(query.toLowerCase())
		)
	}, [sortedWords, query])
	return sortedAndSearchedWords
}
