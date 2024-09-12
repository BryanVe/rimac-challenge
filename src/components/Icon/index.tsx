import { icons } from './icons'

type IconProps = SvgProps & {
	name: keyof typeof icons
}

const Icon = ({ name, ...restProps }: IconProps) => {
	const IconComponent = icons[name]

	if (!IconComponent) return null

	return <IconComponent {...restProps} />
}

export default Icon
