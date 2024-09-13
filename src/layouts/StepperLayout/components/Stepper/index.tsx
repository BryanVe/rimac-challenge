import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import {
	stepperConnectorActive,
	stepperConnectorInactive
} from '~/assets/images'
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

	return (
		<div className='stepper'>
			{data.map(({ path, label }, index) => {
				const isActive = pathname === path
				const isLast = index === data.length - 1
				const isBeforeActive =
					data.findIndex(step => step.path === pathname) > index

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
	)
}

export default Stepper
