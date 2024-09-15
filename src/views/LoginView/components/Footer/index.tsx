import { Divider, Text } from '~/components'

import { RimacLogo } from './components'

import './style.scss'

const currentYear = new Date().getFullYear()

const Footer = () => (
	<footer className='footer'>
		<div className='footer__content'>
			<RimacLogo />
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
