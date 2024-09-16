import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Icon } from '~/components'

import { PlanPriceCard, SliderControls } from './components'

import './style.scss'

// ! The keywords should be dynamic
const mockedKeywords = [
	'Médico general a domicilio',
	'Videoconsulta',
	'Indemnización',
	'Consultas en clínica',
	'Medicinas y exámenes',
	'más de 200 clínicas del país.',
	'Un Chequeo preventivo general',
	'Vacunas',
	'Incluye todos los beneficios del Plan en Casa.'
]

type PlanPricesSectionProps = {
	plans: TPlan[]
	discount?: number
}

// TODO: improve the scroll behavior
const PlanPricesSection = ({ plans, discount }: PlanPricesSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null)
	const cardRef = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	const slideLeft = () => {
		if (!sectionRef.current || !cardRef.current) return

		sectionRef.current.scrollTo({
			behavior: 'smooth',
			left: sectionRef.current.scrollLeft - cardRef.current.clientWidth
		})
	}

	const slideRight = () => {
		if (!sectionRef.current || !cardRef.current) return

		sectionRef.current.scrollTo({
			behavior: 'smooth',
			left: sectionRef.current.scrollLeft + cardRef.current.clientWidth
		})
	}

	const selectPlan = (plan: TPlan) => () => {
		sessionStorage.setItem(
			'selectedPlan',
			JSON.stringify({
				...plan,
				discount
			})
		)
		navigate('/summary')
	}

	return (
		<>
			<div
				ref={sectionRef}
				className='plan-prices-section'
			>
				{plans?.map((plan, index) => {
					const isEven = index % 2 === 0 // ! The icon should be dynamic

					return (
						<PlanPriceCard
							key={plan.name}
							title={plan.name}
							price={plan.price}
							discount={discount}
							details={plan.description}
							keywords={mockedKeywords}
							isRecommended={!isEven} // ! The recommended plan should be dynamic
							icon={<Icon name={isEven ? 'home' : 'hospital'} />}
							selectPlan={selectPlan(plan)}
						/>
					)
				})}
			</div>
			<SliderControls
				slideLeft={slideLeft}
				slideRight={slideRight}
			/>
		</>
	)
}

export default PlanPricesSection
