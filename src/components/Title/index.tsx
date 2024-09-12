import clsx from 'clsx'

import { getResponsiveValue } from '~/utils/style'

import './style.scss'

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	c?: ColorProp
	fw?: FontWeightProp
	order?: TitleOrderProp
	size?: number | ResponsiveProp<number>
	ls?: number | ResponsiveProp<number>
	lh?: number | ResponsiveProp<number>
}

const Title = ({
	c,
	className,
	lh,
	ls,
	fw,
	order = 1,
	size,
	style,
	...restProps
}: TitleProps) => {
	const Heading = `h${order}` as const
	const _style = {
		'--desktop-size': getResponsiveValue(size, 'desktop'),
		'--mobile-size': getResponsiveValue(size, 'mobile'),
		'--desktop-ls': getResponsiveValue(ls, 'desktop'),
		'--mobile-ls': getResponsiveValue(ls, 'mobile'),
		'--desktop-lh': getResponsiveValue(lh, 'desktop'),
		'--mobile-lh': getResponsiveValue(lh, 'mobile'),
		...style
	} satisfies StyleProp
	const _className = clsx(
		'title',
		fw && `title--${fw}-weight`,
		c && `title--${c}-color`,
		className
	)

	return (
		<Heading
			className={_className}
			style={_style}
			{...restProps}
		/>
	)
}

export default Title
