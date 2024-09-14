import { Outlet, useLocation } from 'react-router-dom'

import { Stepper } from './components'
import BackButton from './components/BackButton'

import './style.scss'

const steps = [
	{
		path: '/plans',
		label: 'Planes y coberturas'
	},
	{
		path: '/summary',
		label: 'Resumen'
	}
]

const StepperLayout = () => {
	const { pathname } = useLocation()
	const currentStepIndex = steps.findIndex(step => step.path === pathname)
	const isFirstStep = currentStepIndex === 0
	const previousPath = isFirstStep ? '/' : steps[currentStepIndex].path

	return (
		<div className='stepper-layout'>
			<Stepper
				steps={steps}
				currentStepIndex={currentStepIndex}
			/>
			<div className='stepper-layout__container'>
				<div className='stepper-layout__content'>
					<BackButton
						className='stepper-layout__back-button'
						previousPath={previousPath}
					/>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default StepperLayout
