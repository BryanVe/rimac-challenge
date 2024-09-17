import clsx from 'clsx'

import './style.scss'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: RimacColor
}

const Divider = ({ color, className, ...restProps }: DividerProps) => {
	const _className = clsx('divider', color && `divider--${color}`, className)

	return (
		<div
			className={_className}
			{...restProps}
		/>
	)
}

export default Divider
