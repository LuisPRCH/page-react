import { useState } from 'react'
import { useLocation } from 'wouter'
import './Search.css'

export default function Search() {
	const [keyword, setKeyword] = useState('')

	const [path, location] = useLocation()

	const handleSubmit = evt => {
		evt.preventDefault()
		if (keyword === '') {
			location('/')
		} else {
			location(`${path}search/${keyword}`)
			setKeyword('')
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
