import { useEffect } from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListoOfGifs'
import UseGifs from '../../hooks/UseGifs/UseGifs'
import './SearchResults.css'

export default function SearchResults({ params }) {
	const keyword = params.keyword

	const { loading, gifs, setPage } = UseGifs({ keyword })

	const handleNextPage = () => setPage(prevPage => prevPage + 1)

	useEffect(() => {
		window.scrollBy(0, -window.innerHeight);
	},[loading])

	return (
		<>
			<h2>Search</h2>
			<ListOfGifs gifs={gifs} loading={loading} />
			<button className='button_next' onClick={handleNextPage}>
				Get netx gifs
			</button>
		</>
	)
}
