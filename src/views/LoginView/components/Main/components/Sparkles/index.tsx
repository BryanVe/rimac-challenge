import {
	leftSparkleDesktop,
	leftSparkleMobile,
	rightSparkleDesktop,
	rightSparkleMobile
} from '~/assets/images'

import './style.scss'

const leftSparkleAlt = 'Desenfoque izquierdo'
const rightSparkleAlt = 'Desenfoque derecho'

const Sparkles = () => (
	<>
		<img
			draggable={false}
			alt={leftSparkleAlt}
			src={leftSparkleDesktop}
			className='left-sparkle left-sparkle--desktop'
		/>
		<img
			draggable={false}
			alt={rightSparkleAlt}
			src={rightSparkleDesktop}
			className='right-sparkle right-sparkle--desktop'
		/>
		<img
			draggable={false}
			alt={leftSparkleAlt}
			src={leftSparkleMobile}
			className='left-sparkle left-sparkle--mobile'
		/>
		<img
			draggable={false}
			alt={rightSparkleAlt}
			src={rightSparkleMobile}
			className='right-sparkle right-sparkle--mobile'
		/>
	</>
)

export default Sparkles
