import { useRef } from 'react'

import { Icon } from '~/components'

import { PlanPriceCard, SliderControls } from './components'

import './style.scss'

// TODO: improve the scroll behavior
const PlanPricesSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null)
	const cardRef = useRef<HTMLDivElement>(null)

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

	return (
		<>
			<div
				ref={sectionRef}
				className='plan-prices-section'
			>
				<PlanPriceCard
					ref={cardRef}
					title='Plan en Casa'
					price={39}
					details={[
						'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
						'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
						'Indemnización de S/300 en caso de hospitalización por más de un día.'
					]}
					keywords={[
						'Médico general a domicilio',
						'Videoconsulta',
						'Indemnización'
					]}
					icon={<Icon name='home' />}
				/>
				<PlanPriceCard
					isRecommended
					title='Plan en Casa y Clínica'
					price={94.05}
					details={[
						'Consultas en clínica para cualquier especialidad. ',
						'Medicinas y exámenes derivados cubiertos al 80%',
						'Atención médica en más de 200 clínicas del país.'
					]}
					keywords={[
						'Consultas en clínica',
						'Medicinas y exámenes',
						'más de 200 clínicas del país.'
					]}
					icon={<Icon name='hospital' />}
				/>
				<PlanPriceCard
					title='Plan en Casa'
					price={39}
					details={[
						'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
						'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
						'Indemnización de S/300 en caso de hospitalización por más de un día.'
					]}
					keywords={[
						'Médico general a domicilio',
						'Videoconsulta',
						'Indemnización'
					]}
					icon={<Icon name='home' />}
				/>
			</div>
			<SliderControls
				slideLeft={slideLeft}
				slideRight={slideRight}
			/>
		</>
	)
}

export default PlanPricesSection
