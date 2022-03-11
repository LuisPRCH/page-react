import { useEffect, useState } from 'react'
import Gif from '../../components/Gif/Gif'
import getSingleGif from '../../services/getSingleGif'

export default function Details({ params }) {
	const [gif, setGif] = useState([])

	useEffect(() => {
		getSingleGif({ id: params.id }).then(gif => {
			setGif(gif)
		})
	}, [params])

	return <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
}
