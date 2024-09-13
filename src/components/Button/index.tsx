import clsx from 'clsx'

import './style.scss'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean
	loading?: boolean
}

const Button = ({
	className,
	disabled,
	loading,
	children,
	...restProps
}: ButtonProps) => {
	const _className = clsx('button', className)

	return (
		<button
			disabled={disabled || loading}
			className={_className}
			{...restProps}
		>
			{loading && <div className='button__loader' />}
			<span className='button__text'>{children}</span>
		</button>
	)
}

export default Button
