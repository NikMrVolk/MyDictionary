import { useMemo } from 'react'

export const usePages = (totalPages) => {
	const getPagesQty = useMemo(() => {
		const arrQty = []
		for (let i = 0; i < totalPages; i++) {
			arrQty.push(i + 1)
		}
		return arrQty
	}, [totalPages])
	return getPagesQty
}
