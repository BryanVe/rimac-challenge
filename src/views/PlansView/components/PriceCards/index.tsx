import { Icon } from '~/components'

import { PriceCard } from './components'

const PriceCards = () => {
	return (
		<div className='plans-view__price-cards'>
			<PriceCard
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
			<PriceCard
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
		</div>
	)
}

export default PriceCards
