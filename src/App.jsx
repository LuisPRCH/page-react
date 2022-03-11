import './App.css'
import { Route } from 'wouter'
import Search from './components/Search/Search'
import Logo from './components/Logo/Logo'
import PopularGif from './components/PopularGifs/PopularGifs'
import SearchResults from './pages/SearchResults/SearchResults'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Masonry from 'masonry-layout'

export default function App() {
	return (
		<div className='App'>
			<Logo className='logo' />
			<Search className='search' />
			<section className='content_displayed'>
				<Route path='/search/:keyword' component={SearchResults} />
				<Route path='/gif/:id' component={Details} />
				<Route path='/' component={Home} />
			</section>
			<PopularGif className='popular' />
		</div>
	)
}
