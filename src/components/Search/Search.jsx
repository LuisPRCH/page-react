import { useState } from 'react'
import { useLocation } from 'wouter'
import './Search.css'

export default function Search() {
	const [keyword, setKeyword] = useState('')

	const [location, setLocation] = useLocation()

	const handleSubmit = evt => {
		evt.preventDefault()
		if (keyword === '') {
			setLocation('/')
		} else {
			setLocation(`/search/${keyword}`)
		}
	}

	const handleChange = evt => {
		setKeyword(evt.target.value)
	}

	return (
		<section className='form search'>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					placeholder='Search Gif'
					value={keyword}
				/>
				<button>Search</button>
			</form>
		</section>
	)
}
