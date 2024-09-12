import { Link } from 'react-router-dom'

import { rimacNegativeLogo, rimacNegativeLogoSm } from '~/assets/images'

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
			<div className='footer__divider' />
			<span className='footer__copyright'>
				© {currentYear} RIMAC Seguros y Reaseguros.
			</span>
		</div>
	</footer>
)

export default Footer
