import ListOfGifs from '../../components/ListOfGifs/ListoOfGifs'
import UseGifs from '../../hooks/UseGifs/UseGifs'

export default function Home() {
	const { gifs } = UseGifs({ keyword: localStorage.getItem('lastKeyword'), limit: 3 })
	return (
		<>
			<h2>Last Seach</h2>
			<ListOfGifs gifs={gifs} />
		</>
	)
}
