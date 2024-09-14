import { Card, Divider, Title } from '~/components'

import { CardHeader, CardSection } from './components'

import './style.scss'

const SummaryView = () => {
	return (
		<div className='summary-view'>
			<Title
				color='darkblue-800'
				size={{
					desktop: 40,
					mobile: 32
				}}
				lh={{
					desktop: 48,
					mobile: 40
				}}
				ls={-0.6}
			>
				Resumen del seguro
			</Title>
			<Card className='summary-view__breakdown-card'>
				<CardHeader />
				<Divider color='darkblue-200' />
				<CardSection
					title='Responsable del pago'
					data={['DNI: 444888888', 'Celular: 5130216147']}
				/>
				<CardSection
					title='Plan elegido'
					data={['Plan en Casa y Clínica', 'Costo del Plan: $99 al mes']}
				/>
			</Card>
		</div>
	)
}

export default SummaryView
