import clsx from 'clsx'

type StepProps = {
	index: number
	label: string
	isActive: boolean
}

const Step = ({ index, label, isActive }: StepProps) => (
	<div className={clsx('stepper__step', isActive && 'stepper__step--active')}>
		<div className='stepper__step-indicator'>{index + 1}</div>
		<span className='stepper__step-label'>{label}</span>
	</div>
)

export default Step
