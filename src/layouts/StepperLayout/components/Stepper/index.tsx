import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import {
	stepperConnectorActive,
	stepperConnectorInactive
} from '~/assets/images'
import { Icon } from '~/components'
import { mobileBreakpoint } from '~/theme/globals'

import Step from '../Step'

import './style.scss'

type Step = {
	path: string
	label: string
}

type StepperProps = {
	data: Step[]
}

const Stepper = ({ data }: StepperProps) => {
	const { pathname } = useLocation()
	const currentIndex = data.findIndex(step => step.path === pathname)
	const currentPercentage = `${((currentIndex + 1) / data.length) * 100}%`
	const isFirstIndex = currentIndex === 0

	const progressBarStyle: CSSVariables = {
		'--progress-bar-width': currentPercentage
	}

	return (
		<>
			<div className='stepper stepper--desktop'>
				{data.map(({ path, label }, index) => {
					const isActive = pathname === path
					const isLast = index === data.length - 1
					const isBeforeActive = currentIndex > index

					return (
						<Fragment key={path}>
							<Step
								index={index}
								isActive={isActive}
								label={label}
							/>
							{!isLast && (
								<picture>
									<source
										media={`(width > ${mobileBreakpoint}px)`}
										srcSet={
											isBeforeActive
												? stepperConnectorInactive
												: stepperConnectorActive
										}
									/>
									<img
										draggable={false}
										className='stepper__connector'
										alt='Conector del pasos'
									/>
								</picture>
							)}
						</Fragment>
					)
				})}
			</div>
			<div className='stepper stepper--mobile'>
				<button
					disabled={isFirstIndex}
					className='stepper__back-button'
				>
					<Icon name='caretCircleLeft' />
				</button>
				<div className='stepper__counter'>
					Paso {currentIndex + 1} de {data.length}
				</div>
				<div className='stepper__progress'>
					<div
						className='stepper__progress-bar'
						style={progressBarStyle}
					/>
				</div>
			</div>
		</>
	)
}

export default Stepper
