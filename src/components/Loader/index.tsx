import clsx from 'clsx'

import './style.scss'

type LoaderProps = React.HTMLAttributes<HTMLDivElement>

const Loader = ({ className, ...restProps }: LoaderProps) => {
	const _className = clsx('loader', className)

	return (
		<div
			className={_className}
			{...restProps}
		/>
	)
}

export default Loader
