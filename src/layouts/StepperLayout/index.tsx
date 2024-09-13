import { Outlet } from 'react-router-dom'

import { Stepper } from './components'

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

const StepperLayout = () => (
	<div className='stepper-layout'>
		<Stepper data={steps} />
		<Outlet />
	</div>
)

export default StepperLayout
