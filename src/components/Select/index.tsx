import clsx from 'clsx'

import Icon from '../Icon'

import './style.scss'

type SelectOption = {
	value: string
	label: string
}

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	disabled?: boolean
	options?: SelectOption[]
}

const Select = ({ className, options, ...restProps }: SelectProps) => {
	const _className = clsx('select', className)

	return (
		<div className={_className}>
			<Icon
				name='caretDown'
				className='select__icon'
			/>
			<select
				className='select__field'
				{...restProps}
			>
				{options?.map(({ value, label }) => (
					<option
						key={value}
						value={value}
					>
						{label}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
