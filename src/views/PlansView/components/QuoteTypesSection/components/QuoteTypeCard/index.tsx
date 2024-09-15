import clsx from 'clsx'

import { Card, Icon, IconProps, Text, Title } from '~/components'

import './style.scss'

type QuoteTypeCardProps = {
	id: 'myself' | 'someone'
	icon: IconProps['name']
	title: string
	description: string
	isSelected: boolean
	selectQuoteType: (quoteTypeId: 'myself' | 'someone') => () => void
}

const QuoteTypeCard = ({
	id,
	icon,
	title,
	description,
	isSelected,
	selectQuoteType
}: QuoteTypeCardProps) => (
	<Card
		key={id}
		className={clsx(
			'quote-type-card',
			isSelected && 'quote-type-card--selected'
		)}
		onClick={selectQuoteType(id)}
	>
		<div className='quote-type-card__radio'>
			{isSelected && <Icon name='check' />}
		</div>
		<div className='quote-type-card__header'>
			<Icon
				name={icon}
				className='quote-type-card__header__icon'
			/>
			<Title
				order={3}
				size={20}
				lh={28}
				ls={-0.2}
				fw='black'
			>
				{title}
			</Title>
		</div>
		<Text
			size={12}
			lh={20}
			ls={0.2}
		>
			{description}
		</Text>
	</Card>
)

export default QuoteTypeCard
