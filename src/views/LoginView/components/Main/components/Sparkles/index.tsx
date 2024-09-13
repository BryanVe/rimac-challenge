import {
	leftSparkleDesktop,
	leftSparkleMobile,
	rightSparkleDesktop,
	rightSparkleMobile
} from '~/assets/images'
import { mobileBreakpoint } from '~/theme/globals'

import './style.scss'

const Sparkles = () => (
	<>
		<picture>
			<source
				media={`(width <= ${mobileBreakpoint}px)`}
				srcSet={leftSparkleMobile}
			/>
			<img
				draggable={false}
				alt='Desenfoque izquierdo'
				src={leftSparkleDesktop}
				className='left-sparkle'
			/>
		</picture>
		<picture>
			<source
				media={`(width <= ${mobileBreakpoint}px)`}
				srcSet={rightSparkleMobile}
			/>
			<img
				draggable={false}
				alt='Desenfoque derecho'
				src={rightSparkleDesktop}
				className='right-sparkle'
			/>
		</picture>
	</>
)

export default Sparkles
