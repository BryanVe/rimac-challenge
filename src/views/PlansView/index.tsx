import { Text, Title } from '~/components'

import './style.scss'

const PlansView = () => {
	return (
		<div className='plans-view'>
			<Title
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
				size={16}
				lh={28}
				ls={0.1}
				className='plans-view__description'
			>
				Selecciona la opción que se ajuste más a tus necesidades.
			</Text>
		</div>
	)
}

export default PlansView
