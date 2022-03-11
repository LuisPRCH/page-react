import './ListOfGifs.css'
import Gif from '../Gif/Gif'
import Loader from '../Loader/Loader'
import Masonry from 'react-masonry-css'

export default function ListOfGifs({ gifs, loading }) {

	const breakpoints = {
		default: 3,
		1000: 2,
		700: 1,
	}

	return (
		<Masonry
			breakpointCols={breakpoints}
			className='my-masonry-grid'
			columnClassName='my-masonry-grid_column'
		>
			{loading ? (
				<Loader />
			) : (
				gifs.map(singleGif => (
					<Gif
						key={singleGif.id}
						title={singleGif.title}
						url={singleGif.url}
						id={singleGif.id}
					/>
				))
			)}
		</Masonry>
	)
}
