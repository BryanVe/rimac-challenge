import clsx from 'clsx'

import './style.scss'

export interface NumberInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	disabled?: boolean
	error?: React.ReactNode
}

const NumberInput = ({
	className,
	error,
	placeholder,
	...restProps
}: NumberInputProps) => {
	const _className = clsx('number-input', className)

	return (
		<div className={_className}>
			<div className='number-input__wrapper'>
				{placeholder && (
					<label className='number-input__placeholder'>{placeholder}</label>
				)}
				<input
					type='number'
					className='number-input__field'
					placeholder={placeholder}
					{...restProps}
				/>
			</div>
			{error && <div className='number-input__error'>* {error}</div>}
		</div>
	)
}

export default NumberInput
