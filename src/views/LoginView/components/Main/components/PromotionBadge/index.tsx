import clsx from 'clsx'

import './style.scss'

type PromotionBadgeProps = React.HTMLAttributes<HTMLDivElement>

const PromotionBadge = ({ className, ...restProps }: PromotionBadgeProps) => {
	const _className = clsx('promotion-badge', className)

	return (
		<div
			className={_className}
			{...restProps}
		/>
	)
}

export default PromotionBadge
