import { Link, Outlet } from 'react-router-dom'

import { Logo } from '~/components'

import { PhoneSection } from './components'

import './style.scss'

const RootLayout = () => (
	<div className='root-layout'>
		<header className='root-layout__header'>
			<nav className='root-layout__header__content'>
				<Link to='/'>
					<Logo
						name='rimacRegular'
						className='root-layout__header__content__rimac-logo'
					/>
				</Link>
				<PhoneSection />
			</nav>
		</header>
		<Outlet />
	</div>
)

export default RootLayout
