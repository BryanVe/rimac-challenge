import { Icon, Text, Title } from '~/components'

type CardHeaderProps = {
	fullName: string
}

const CardHeader = ({ fullName }: CardHeaderProps) => (
	<div className='breakdown-card__header'>
		<Text
			color='darkblue-800'
			size={10}
			lh={16}
			ls={0.8}
			fw='bold'
			className='breakdown-card__header__title'
		>
			Precios calculados para:
		</Text>
		<div className='user-data'>
			<Icon
				name='users'
				className='user-data__icon'
			/>
			<Title
				color='darkblue-800'
				order={6}
				size={20}
				lh={28}
				ls={-0.2}
			>
				{fullName}
			</Title>
		</div>
	</div>
)

export default CardHeader
