import { Icon } from '~/components'

import './style.scss'

type SliderControlsProps = {
	slideLeft: () => void
	slideRight: () => void
}

const SliderControls = ({ slideLeft, slideRight }: SliderControlsProps) => {
	return (
		<div className='slider-controls'>
			<button
				className='slider-controls__button'
				onClick={slideLeft}
			>
				<Icon name='caretCircleLeft' />
			</button>
			<span>1 / 3</span>
			<button
				className='slider-controls__button'
				onClick={slideRight}
			>
				<Icon name='caretCircleRight' />
			</button>
		</div>
	)
}

export default SliderControls
