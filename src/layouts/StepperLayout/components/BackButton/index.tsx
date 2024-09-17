import { useNavigate } from 'react-router-dom'

import clsx from 'clsx'

import { Icon } from '~/components'
import { useAuth } from '~/hooks'
import { storage } from '~/utils/common'

import './style.scss'

type BackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	previousPath: string
}

const BackButton = ({ className, previousPath }: BackButtonProps) => {
	const navigate = useNavigate()
	const { setUser } = useAuth()

	const goToPreviousPath = () => {
		if (previousPath === '/') {
			storage.removeItem('user')
			setUser(undefined)
		}
		navigate(previousPath)
	}

	return (
		<button
			className={clsx('back-button', className)}
			onClick={goToPreviousPath}
		>
			<Icon
				name='circleLeft'
				className='back-button__icon'
			/>
			<span className='back-button__text'>Volver</span>
		</button>
	)
}

export default BackButton
