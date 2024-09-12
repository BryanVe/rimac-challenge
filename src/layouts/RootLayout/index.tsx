import { Link, Outlet } from 'react-router-dom'

import { rimacLogo } from '~/assets/images'
import { Icon, Text } from '~/components'

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
					<Text
						span
						size={12}
						lh={16}
						ls={0.2}
						fw='semibold'
						className='header__phone-message'
					>
						¡Compra por este medio!
					</Text>
					<a
						className='header__phone-number'
						href='tel:+014116001'
					>
						<Icon
							name='phone'
							className='header__phone-icon'
						/>
						<Text
							span
							size={{
								desktop: 18,
								mobile: 16
							}}
							lh={20}
							ls={0.4}
							fw='bold'
						>
							(01) 411 6001
						</Text>
					</a>
				</div>
			</nav>
		</header>
		<Outlet />
	</div>
)

export default RootLayout
