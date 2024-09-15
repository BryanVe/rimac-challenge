import { QuoteTypeCard, QuoteTypesHeader } from './components'

import './style.scss'

const quoteTypes = [
	{
		id: 'myself',
		icon: 'protectMyself',
		title: 'Para mi',
		description:
			'Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
	},
	{
		id: 'someone',
		icon: 'protectSomeone',
		title: 'Para alguien más',
		description:
			'Realiza una cotización para uno de tus familiares o cualquier persona.'
	}
] as const

type QuoteTypesSectionProps = {
	selectedQuoteTypeId?: 'myself' | 'someone'
	selectQuoteType: (quoteTypeId: 'myself' | 'someone') => () => void
}

const QuoteTypesSection = ({
	selectedQuoteTypeId,
	selectQuoteType
}: QuoteTypesSectionProps) => (
	<div className='quote-types-section'>
		<QuoteTypesHeader />
		<div className='quote-types-section__options'>
			{quoteTypes.map(quoteType => {
				const isSelected = quoteType.id === selectedQuoteTypeId

				return (
					<QuoteTypeCard
						{...quoteType}
						key={quoteType.id}
						isSelected={isSelected}
						selectQuoteType={selectQuoteType}
					/>
				)
			})}
		</div>
	</div>
)

export default QuoteTypesSection
