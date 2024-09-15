import { Text } from '~/components'

type CardContentProps = {
	details: string[]
	keywords?: string[]
}

const hightlightDetails = (details: string[], keywords: string[]) =>
	details.map(detail => {
		let highlightedDetail = detail

		keywords.forEach(keyword => {
			highlightedDetail = highlightedDetail.replace(
				keyword,
				`<b>${keyword}</b>`
			)
		})

		return highlightedDetail
	})

const CardContent = ({ details, keywords }: CardContentProps) => {
	const highlightedDetails = !keywords
		? details
		: hightlightDetails(details, keywords)

	return (
		<div className='plans-view__price-cards__price-card__card-content'>
			<ul>
				{highlightedDetails.map((detail, detailIndex) => (
					<li key={`${detail}-${detailIndex}`}>
						<span className='dot'>&#x2022;</span>
						<Text
							size={16}
							lh={28}
							ls={0.1}
							color='darkblue-800'
							dangerouslySetInnerHTML={{ __html: detail }}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CardContent
