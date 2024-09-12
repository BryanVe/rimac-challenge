import { icons } from './icons'

type IconProps = {
	name: keyof typeof icons
}

const Icon = ({ name }: IconProps) => {
	const IconComponent = icons[name]

	if (!IconComponent) return null

	return <IconComponent />
}

export default Icon
