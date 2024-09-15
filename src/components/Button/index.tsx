import clsx from 'clsx'

import Loader from '../Loader'

import './style.scss'

type ButtonColor = 'black' | 'red'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	disabled?: boolean
	loading?: boolean
	color?: ButtonColor
	size?: ButtonSize
}

const Button = ({
	className,
	disabled,
	loading,
	color = 'black',
	size = 'lg',
	children,
	...restProps
}: ButtonProps) => {
	const _className = clsx(
		'button',
		`button--${color}`,
		`button--${size}`,
		className
	)

	return (
		<button
			disabled={disabled || loading}
			className={_className}
			{...restProps}
		>
			{loading && <Loader />}
			<span className='button__text'>{children}</span>
		</button>
	)
}

export default Button
