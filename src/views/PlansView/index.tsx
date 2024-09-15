import { useState } from 'react'

import { PlanPricesSection, QuoteTypesSection } from './components'

import './style.scss'

const PlansView = () => {
	const [selectedQuoteTypeId, setSelectedQuoteTypeId] = useState<
		'myself' | 'someone'
	>()

	const selectQuoteType = (quoteTypeId: 'myself' | 'someone') => () =>
		setSelectedQuoteTypeId(
			selectedQuoteTypeId === quoteTypeId ? undefined : quoteTypeId
		)

	return (
		<div className='plans-view'>
			<QuoteTypesSection
				selectedQuoteTypeId={selectedQuoteTypeId}
				selectQuoteType={selectQuoteType}
			/>
			<PlanPricesSection />
		</div>
	)
}

export default PlansView
