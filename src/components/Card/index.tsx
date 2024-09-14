import clsx from 'clsx'

import './style.scss'

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = ({ className, ...restProps }: CardProps) => {
	const _className = clsx('card', className)

	return (
		<div
			className={_className}
			{...restProps}
		/>
	)
}

export default Card
