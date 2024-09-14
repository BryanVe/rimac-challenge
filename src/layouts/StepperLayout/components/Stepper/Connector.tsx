import {
	stepperConnectorActive,
	stepperConnectorInactive
} from '~/assets/images'
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
