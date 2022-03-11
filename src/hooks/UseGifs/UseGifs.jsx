import { useEffect, useState } from 'react'
import getGifs from '../../services/getGifs'

const INITIAL_PAGE = 0

export default function UseGifs({ keyword, limit = 9 }) {
	const [loading, setLoading] = useState(false)
	const [nextLoading, setNextLoading] = useState(false)
	const [page, setPage] = useState(INITIAL_PAGE)
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		setLoading(true)
		getGifs({ keyword, limit }).then(gifs => {
			setGifs(gifs)
			setLoading(false)
			if(gifs.length == 0) {
				localStorage.setItem('lastKeyword', 'ramdon')
			} else {
				localStorage.setItem('lastKeyword', keyword)
			}
		})
	}, [keyword, setGifs])

	useEffect(() => {
		if (page === INITIAL_PAGE) return
		setNextLoading(true)
		getGifs({ keyword: keyword, page: page }).then(nextGifs => {
			setGifs(prevGifs => prevGifs.concat(nextGifs))
			setNextLoading(false)
		})
	}, [page, setGifs])

	return { loading, nextLoading, gifs, setPage }
}
