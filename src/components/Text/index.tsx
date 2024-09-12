import clsx from 'clsx'

import { getResponsiveValue } from '~/utils/style'

import './style.scss'

type TextCommonProps = {
	color?: RimacColor
	fw?: RimacFontWeight
	size?: number | ResponsiveProp<number>
	ls?: number | ResponsiveProp<number>
	lh?: number | ResponsiveProp<number>
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
	span?: true
}

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
	span?: false
}

type TextProps = TextCommonProps & (ParagraphProps | SpanProps)

const Text = ({
	className,
	color,
	lh,
	ls,
	size,
	span,
	style,
	fw,
	...restProps
}: TextProps) => {
	const Tag = span ? 'span' : 'p'
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
		'text',
		fw && `text--${fw}-weight`,
		color && `text--${color}-color`,
		className
	)

	return (
		<Tag
			className={_className}
			style={_style}
			{...restProps}
		/>
	)
}

export default Text
