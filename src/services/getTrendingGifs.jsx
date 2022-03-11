import { apiKey } from './settings'

export default async function getGifs() {
	const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}&limit=10`

	const res = await fetch(apiURL)
	const response = await res.json()
	const { data } = response

	return data
}
