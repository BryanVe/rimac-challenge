import clsx from 'clsx'

import './style.scss'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: DividerColor
}

const Divider = ({ color, className, ...restProps }: DividerProps) => {
	const _className = clsx(
		'divider',
		color && `divider--${color}-color`,
		className
	)

	return (
		<div
			className={_className}
			{...restProps}
		/>
	)
}

export default Divider
