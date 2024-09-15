import { NumberInput, Select } from '~/components'

const IDInput = () => (
	<div className='main__content__right-section__login-form__id-input'>
		<Select
			options={[
				{
					label: 'DNI',
					value: 'dni'
				},
				{
					label: 'RUC',
					value: 'ruc'
				}
			]}
			className='main__content__right-section__login-form__id-input__select'
		/>
		<NumberInput
			placeholder='Nro. de documento'
			className='main__content__right-section__login-form__id-input__number-input'
		/>
	</div>
)

export default IDInput
