import { Text } from '~/components'

type CardSectionProps = {
	title: string
	data: string[]
}

const CardSection = ({ data, title }: CardSectionProps) => (
	<div className='breakdown-card__info-section'>
		<Text
			size={16}
			lh={24}
			ls={0.2}
			fw='semibold'
		>
			{title}
		</Text>
		{data.map((item, itemIndex) => (
			<Text
				key={`${item}-${itemIndex}`}
				size={14}
				lh={24}
				ls={0.1}
			>
				{item}
			</Text>
		))}
	</div>
)

export default CardSection
