import { Icon, Text, Title } from '~/components'

const CardHeader = () => (
	<div className='summary-view__breakdown-card__header'>
		<Text
			color='darkblue-800'
			size={10}
			lh={16}
			ls={0.8}
			fw='bold'
			className='summary-view__breakdown-card__header__title'
		>
			Precios calculados para:
		</Text>
		<div className='summary-view__breakdown-card__header__user-data'>
			<Icon
				name='users'
				className='summary-view__breakdown-card__header__user-data__icon'
			/>
			<Title
				color='darkblue-800'
				order={6}
				size={20}
				lh={28}
				ls={-0.2}
			>
				Rocio Miranda Díaz
			</Title>
		</div>
	</div>
)

export default CardHeader
