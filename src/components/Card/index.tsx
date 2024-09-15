import { forwardRef } from 'react'

import clsx from 'clsx'

import './style.scss'

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, ...restProps }, ref) => {
		const _className = clsx('card', className)

		return (
			<div
				ref={ref}
				className={_className}
				{...restProps}
			/>
		)
	}
)

export default Card
