import { useState } from 'react'

import clsx from 'clsx'

import { Card, Icon, Text, Title } from '~/components'

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
			<Title
				color='darkblue-800'
				order={2}
				size={{
					desktop: 40,
					mobile: 28
				}}
				lh={{
					desktop: 48,
					mobile: 36
				}}
				ls={{
					desktop: -0.6,
					mobile: -0.8
				}}
				className='plans-view__title'
			>
				Rocío ¿Para quién deseas cotizar?
			</Title>
			<Text
				color='darkblue-800'
				size={16}
				lh={28}
				ls={0.1}
				className='plans-view__description'
			>
				Selecciona la opción que se ajuste más a tus necesidades.
			</Text>
			<div className='plans-view__quote-types'>
				{quoteTypes.map(quoteType => {
					const isSelected = quoteType.id === selectedQuoteTypeId

					return (
						<Card
							key={quoteType.id}
							className={clsx(
								'plans-view__quote-type',
								isSelected && 'plans-view__quote-type--selected'
							)}
							onClick={selectQuoteType(quoteType.id)}
						>
							<div className='plans-view__quote-type__radio'>
								{isSelected && <Icon name='check' />}
							</div>
							<div className='plans-view__quote-type__header'>
								<Icon
									name={quoteType.icon}
									className='plans-view__quote-type__icon'
								/>
								<Title
									order={3}
									size={20}
									lh={28}
									ls={-0.2}
									className='plans-view__quote-type__title'
								>
									{quoteType.title}
								</Title>
							</div>
							<Text
								size={12}
								lh={20}
								ls={0.2}
							>
								{quoteType.description}
							</Text>
						</Card>
					)
				})}
			</div>
		</div>
	)
}

export default PlansView
