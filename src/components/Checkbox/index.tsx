import clsx from 'clsx'

import { generateId } from '~/utils/common'

import Icon from '../Icon'

import './style.scss'

export interface CheckboxProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	disabled?: boolean
	error?: React.ReactNode
	label?: React.ReactNode
}

const Checkbox = ({
	className,
	error,
	label,
	id,
	...restProps
}: CheckboxProps) => {
	const _id = id && id.length > 0 ? id : generateId()
	const _className = clsx('checkbox', className)

	return (
		<div className={_className}>
			<input
				id={_id}
				type='checkbox'
				className='checkbox__input'
				{...restProps}
			/>
			<label
				htmlFor={_id}
				className='checkbox__label'
			>
				<span className='checkbox__icon'>
					<Icon name='check' />
				</span>
				{label && <span className='checkbox__text'>{label}</span>}
			</label>
			{error && <div className='checkbox__error'>* {error}</div>}
		</div>
	)
}

export default Checkbox
