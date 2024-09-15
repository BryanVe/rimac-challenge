import { forwardRef } from 'react'

import clsx from 'clsx'

import { Button, Card, Divider } from '~/components'

import { CardContent, CardHeader } from './components'

import './style.scss'

type PlanPriceCardProps = {
	icon: React.ReactElement
	title: string
	price: number
	details: string[]
	discount?: number
	keywords?: string[]
	isRecommended?: boolean
}

const PlanPriceCard = forwardRef<HTMLDivElement, PlanPriceCardProps>(
	({ icon, title, price, details, discount, keywords, isRecommended }, ref) => {
		return (
			<Card
				ref={ref}
				className={clsx(
					'plan-price-card',
					isRecommended && 'plan-price-card--recommended'
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
					className='plan-price-card__divider'
				/>
				<CardContent
					details={details}
					keywords={keywords}
				/>
				<Button
					size='sm'
					color='red'
					className='plan-price-card__select-button'
				>
					Seleccionar
				</Button>
			</Card>
		)
	}
)

export default PlanPriceCard
