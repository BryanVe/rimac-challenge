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
	error?: React.ReactNode
	options?: SelectOption[]
}

const Select = ({ className, error, options, ...restProps }: SelectProps) => {
	const _className = clsx('select', className)

	return (
		<div className={_className}>
			<Icon
				name='caretDown'
				className='select__icon'
			/>
			<select
				className='select__wrapper'
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
			{error && <div className='select__error'>* {error}</div>}
		</div>
	)
}

export default Select
