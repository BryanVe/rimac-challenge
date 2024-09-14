import { useNavigate } from 'react-router-dom'

import clsx from 'clsx'

import { Icon } from '~/components'

import './style.scss'

type BackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	previousPath: string
}

const BackButton = ({ className, previousPath }: BackButtonProps) => {
	const navigate = useNavigate()

	const goToPreviousPath = () => navigate(previousPath)

	return (
		<button
			className={clsx('back-button', className)}
			onClick={goToPreviousPath}
		>
			<Icon
				name='caretCircleLeft'
				className='back-button__icon'
			/>
			<span className='back-button__text'>Volver</span>
		</button>
	)
}

export default BackButton
