import { Link } from 'react-router-dom'

import {
	rimacNegativeLogoDesktop,
	rimacNegativeLogoMobile
} from '~/assets/images'
import { Divider, Text } from '~/components'
import { mobileBreakpoint } from '~/theme/globals'

import './style.scss'

const rimacLogoAlt = 'Logo de RIMAC Seguros'
const currentYear = new Date().getFullYear()

const Footer = () => (
	<footer className='footer'>
		<div className='footer__content'>
			<Link to='/'>
				<picture>
					<source
						media={`(width <= ${mobileBreakpoint}px)`}
						srcSet={rimacNegativeLogoMobile}
					/>
					<img
						draggable={false}
						className='footer__logo'
						alt={rimacLogoAlt}
						src={rimacNegativeLogoDesktop}
					/>
				</picture>
			</Link>
			<Divider
				color='blue'
				className='footer__divider'
			/>
			<Text
				span
				color='white'
				size={{
					desktop: 14,
					mobile: 12
				}}
				lh={{
					desktop: 16,
					mobile: 20
				}}
				ls={{
					desktop: 0,
					mobile: 0.1
				}}
			>
				© {currentYear} RIMAC Seguros y Reaseguros.
			</Text>
		</div>
	</footer>
)

export default Footer
