import { Link } from 'wouter'
import './Logo.css'

export default function Logo() {
	return (
		<section className='logo'>
			<Link className='link_home' to={'/'}>
				GIFFY
			</Link>
		</section>
	)
}
