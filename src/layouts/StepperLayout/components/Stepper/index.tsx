import { Fragment } from 'react'

import BackButton from '../BackButton'
import Connector from './Connector'
import Step from './Step'

import './style.scss'

type Step = {
	path: string
	label: string
}

type StepperProps = {
	steps: Step[]
	currentStepIndex: number
}

const Stepper = ({ currentStepIndex, steps }: StepperProps) => {
	const currentPercentage = `${((currentStepIndex + 1) / steps.length) * 100}%`
	const currentStep = steps[currentStepIndex]
	const isFirstStep = currentStepIndex === 0
	const previousPath = isFirstStep ? '/' : steps[currentStepIndex].path

	const progressBarStyle: StyleProp = {
		'--progress-bar-width': currentPercentage
	}

	return (
		<>
			<div className='stepper stepper--desktop'>
				{steps.map(({ path, label }, stepIndex) => {
					const isCurrentStep = currentStep.path === path
					const isBeforeCurrentStep = currentStepIndex > stepIndex
					const isLastStep = stepIndex === steps.length - 1

					return (
						<Fragment key={path}>
							<Step
								index={stepIndex}
								isActive={isCurrentStep}
								label={label}
							/>
							{!isLastStep && <Connector isActive={!isBeforeCurrentStep} />}
						</Fragment>
					)
				})}
			</div>
			<div className='stepper stepper--mobile'>
				<BackButton previousPath={previousPath} />
				<div className='stepper__counter'>
					Paso {currentStepIndex + 1} de {steps.length}
				</div>
				<div
					className='stepper__progress'
					style={progressBarStyle}
				/>
			</div>
		</>
	)
}

export default Stepper
