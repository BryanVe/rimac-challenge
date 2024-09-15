import { Link } from 'react-router-dom'

import { Divider, Logo, Text } from '~/components'

import './style.scss'

const currentYear = new Date().getFullYear()

const Footer = () => (
	<footer className='footer'>
		<div className='footer__content'>
			<Link to='/'>
				<Logo
					name='rimacRegular'
					className='rimac-logo rimac-logo--desktop'
				/>
				<Logo
					name='rimacFlat'
					className='rimac-logo rimac-logo--mobile'
				/>
			</Link>
			<Divider
				color='darkblue-700'
				className='footer__content__divider'
			/>
			<Text
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
