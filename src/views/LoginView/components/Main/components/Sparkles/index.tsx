import leftSparkleDesktop from '~/assets/images/left_sparkle_desktop.webp'
import leftSparkleMobile from '~/assets/images/left_sparkle_mobile.webp'
import rightSparkleDesktop from '~/assets/images/right_sparkle_desktop.webp'
import rightSparkleMobile from '~/assets/images/right_sparkle_mobile.webp'
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
