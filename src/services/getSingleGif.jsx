import { apiKey } from './settings'

export default async function ({ id }) {
	const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
	const response = await fetch(apiURL)
	const res = await response.json()
	const data = {
		url: res.data.images.downsized_medium.url,
		id: res.data.id,
		title: res.data.title,
	}
	return data
}
