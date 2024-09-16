import { Navigate } from 'react-router-dom'

import { Card, Divider, Title } from '~/components'

import { CardHeader, CardSection } from './components'
import { useSummary } from './hooks'

import './style.scss'

const SummaryView = () => {
	const { selectedPlan, user } = useSummary()

	if (!selectedPlan || !user) return <Navigate to='/plans' />

	const fullName = `${user.name} ${user.lastName}`
	const finalPrice = selectedPlan.discount
		? ((1 - selectedPlan.discount / 100) * selectedPlan.price).toFixed(2)
		: selectedPlan.price

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
				<CardHeader fullName={fullName} />
				<Divider color='darkblue-200' />
				<CardSection
					title='Responsable del pago'
					data={[`DNI: ${user.idNumber}`, `Celular: ${user.phone}`]}
				/>
				<CardSection
					title='Plan elegido'
					data={[selectedPlan.name, `Costo del Plan: $${finalPrice} al mes`]}
				/>
			</Card>
		</div>
	)
}

export default SummaryView
