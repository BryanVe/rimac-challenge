import clsx from 'clsx'

import { Card, Divider } from '~/components'

import { CardContent, CardHeader } from './components'

type PriceCardProps = {
	icon: React.ReactElement
	title: string
	price: number
	details: string[]
	discount?: number
	keywords?: string[]
	isRecommended?: boolean
}

const PriceCard = ({
	icon,
	title,
	price,
	details,
	discount,
	keywords,
	isRecommended
}: PriceCardProps) => {
	return (
		<Card
			className={clsx(
				'plans-view__price-cards__price-card',
				isRecommended && 'plans-view__price-cards__price-card--recommended'
			)}
		>
			<CardHeader
				title={title}
				price={price}
				discount={discount}
				icon={icon}
			/>
			<Divider
				color='darkblue-200'
				className='plans-view__price-cards__price-card__card-divider'
			/>
			<CardContent
				details={details}
				keywords={keywords}
			/>
		</Card>
	)
}

export default PriceCard
