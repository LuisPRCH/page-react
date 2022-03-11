import { Link } from 'wouter'
import { useEffect, useState } from 'react'
import getTrendingGifs from '../../services/getTrendingGifs'

export default function PopularGifs() {
	const [popular, setPopular] = useState([])

	useEffect(() => {
		getTrendingGifs().then(gif => {
			setPopular(gif)
		})
	}, [])

	return (
		<>
			<h2>Popular Gifs</h2>
			<ul>
				{popular.map(popularGif => (
					<li key={popularGif}>
						<Link to={`/search/${popularGif}`}>{popularGif}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
