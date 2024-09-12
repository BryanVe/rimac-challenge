import { Link, Outlet } from 'react-router-dom'

import { rimacLogo } from '~/assets/images'
import { Icon } from '~/components'

import './style.scss'

const RootLayout = () => (
	<div className='container'>
		<header className='header'>
			<nav className='header__content'>
				<Link to='/'>
					<img
						draggable={false}
						className='header__logo'
						alt='Logo de RIMAC Seguros'
						src={rimacLogo}
					/>
				</Link>
				<div className='header__phone'>
					<span className='header__phone-message'>¡Compra por este medio!</span>
					<a
						className='header__phone-number'
						href='tel:+014116001'
					>
						<span className='header__phone-icon'>
							<Icon name='phone' />
						</span>
						(01) 411 6001
					</a>
				</div>
			</nav>
		</header>
		<Outlet />
	</div>
)

export default RootLayout
