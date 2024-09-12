import { Link } from 'react-router-dom'

import { rimacNegativeLogo, rimacNegativeLogoSm } from '~/assets/images'
import { Divider, Text } from '~/components'

import './style.scss'

const rimacLogoAlt = 'Logo de RIMAC Seguros'
const currentYear = new Date().getFullYear()

const Footer = () => (
	<footer className='footer'>
		<div className='footer__content'>
			<Link to='/'>
				<img
					draggable={false}
					className='footer__logo footer__logo--desktop'
					alt={rimacLogoAlt}
					src={rimacNegativeLogo}
				/>
				<img
					draggable={false}
					className='footer__logo footer__logo--mobile'
					alt={rimacLogoAlt}
					src={rimacNegativeLogoSm}
				/>
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
