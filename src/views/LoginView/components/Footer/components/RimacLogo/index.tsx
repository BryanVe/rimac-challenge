import { Link } from 'react-router-dom'

import { Logo } from '~/components'

const RimacLogo = () => (
	<Link to='/'>
		<Logo
			name='rimacRegular'
			className='footer__content__rimac-logo footer__content__rimac-logo--desktop'
		/>
		<Logo
			name='rimacFlat'
			className='footer__content__rimac-logo footer__content__rimac-logo--mobile'
		/>
	</Link>
)

export default RimacLogo
