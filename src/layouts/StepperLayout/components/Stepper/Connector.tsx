import stepperConnectorActive from '~/assets/images/stepper_connector_active.webp'
import stepperConnectorInactive from '~/assets/images/stepper_connector_inactive.webp'
import { mobileBreakpoint } from '~/theme/globals'

type ConnectorProps = {
	isActive: boolean
}

const Connector = ({ isActive }: ConnectorProps) => (
	<picture>
		<source
			media={`(width > ${mobileBreakpoint}px)`}
			srcSet={isActive ? stepperConnectorActive : stepperConnectorInactive}
		/>
		<img
			draggable={false}
			alt='Conector del pasos'
		/>
	</picture>
)

export default Connector
