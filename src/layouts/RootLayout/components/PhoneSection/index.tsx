import { Icon, Text } from '~/components'

const PhoneSection = () => (
	<div className='root-layout__header__content__phone-section'>
		<Text
			span
			size={12}
			lh={16}
			ls={0.2}
			fw='semibold'
			className='root-layout__header__content__phone-section__message'
		>
			¡Compra por este medio!
		</Text>
		<a
			className='root-layout__header__content__phone-section__number'
			href='tel:+014116001'
		>
			<Icon
				name='phone'
				className='root-layout__header__content__phone-section__number__icon'
			/>
			<Text
				span
				size={{
					desktop: 18,
					mobile: 16
				}}
				lh={20}
				ls={0.4}
				fw='bold'
			>
				(01) 411 6001
			</Text>
		</a>
	</div>
)

export default PhoneSection
