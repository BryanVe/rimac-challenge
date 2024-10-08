import { cloneElement } from 'react'

import { Text, Title } from '~/components'

import './style.scss'

type CardHeaderProps = {
	icon: React.ReactElement
	title: string
	price: number
	discount?: number
}

const CardHeader = ({ title, price, discount, icon }: CardHeaderProps) => {
	const priceWithDiscount = discount
		? ((1 - discount / 100) * price).toFixed(2)
		: undefined

	return (
		<div className='card-header'>
			<div className='card-header__recommended-badge'>Plan recomendado</div>
			<div className='card-header__general-info'>
				<Title
					order={4}
					size={24}
					lh={32}
					ls={-0.2}
					fw='black'
				>
					{title}
				</Title>
				<div className='price-info'>
					<Text
						size={12}
						lh={16}
						ls={0.6}
						color='darkblue-500'
						fw='bold'
						style={{
							textTransform: 'uppercase' // TODO: create prop for this
						}}
					>
						Costo del plan
					</Text>
					{priceWithDiscount && (
						<Text
							size={14}
							lh={20}
							ls={-0.2}
							color='darkblue-500'
							style={{
								textDecoration: 'line-through'
							}}
						>
							${price} antes
						</Text>
					)}
					<Text
						size={20}
						lh={28}
						ls={-0.2}
						color='darkblue-800'
						fw='black'
					>
						${priceWithDiscount ?? price} al mes
					</Text>
				</div>
			</div>
			{cloneElement(icon, {
				className: 'card-header__icon'
			})}
		</div>
	)
}

export default CardHeader
