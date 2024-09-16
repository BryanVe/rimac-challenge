import Loader from '~/components/Loader'

import { PlanPricesSection, QuoteTypesSection } from './components'
import { usePlans } from './hooks'

import './style.scss'

// ! Instead of using a loader, we could use a skeleton component
const PlansView = () => {
	const {
		selectQuoteType,
		selectedQuoteTypeId,
		discount,
		plans,
		arePlansLoading
	} = usePlans()

	return (
		<div className='plans-view'>
			<QuoteTypesSection
				selectedQuoteTypeId={selectedQuoteTypeId}
				selectQuoteType={selectQuoteType}
			/>
			{arePlansLoading ? (
				<div className='plans-loader'>
					<Loader />
				</div>
			) : selectedQuoteTypeId ? (
				<PlanPricesSection
					discount={discount}
					plans={plans}
				/>
			) : null}
		</div>
	)
}

export default PlansView
