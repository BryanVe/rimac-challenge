import { NumberInput, Select } from '~/components'

import './style.scss'

const DNIField = () => {
	return (
		<div className='dni-field'>
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
				className='dni-field__select'
			/>
			<NumberInput
				placeholder='Nro. de documento'
				className='dni-field__number-input'
			/>
		</div>
	)
}

export default DNIField
