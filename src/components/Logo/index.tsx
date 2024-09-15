import { logos } from './logos'

type LogoProps = SvgProps & {
	name: keyof typeof logos
}

const Logo = ({ name, ...restProps }: LogoProps) => {
	const LogoComponent = logos[name]

	if (!LogoComponent) return null

	return <LogoComponent {...restProps} />
}

export default Logo
