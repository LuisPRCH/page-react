import { apiKey } from './settings'

export default async function getGifs({
	keyword = 'ojo',
	limit = 10,
	page = 0,
} = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=g&lang=en`

	const res = await fetch(apiURL)
	const response = await res.json()
	const { data } = response
	const gifs = data.map(image => {
		const { images, title, id } = image
		const url = images.downsized_medium.url
		return { title, id, url }
	})

	return gifs
}
