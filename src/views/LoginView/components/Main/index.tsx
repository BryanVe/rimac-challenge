import { rimacLanding } from '~/assets/images'
import { Divider, Text, Title } from '~/components'

import { DNIField, Sparkles } from './components'

import './style.scss'

const Main = () => {
	return (
		<main className='login-section'>
			<div className='login-section__content'>
				<div className='login-section__landing-image--desktop'>
					<img
						draggable={false}
						alt='Portada de RIMAC Seguros'
						src={rimacLanding}
					/>
				</div>
				<div className='login-section__form'>
					<div className='login-section__form-header'>
						<div>
							<div className='tag-promo'>Seguro Salud Flexible</div>
							<Title
								size={{
									desktop: 32,
									mobile: 28
								}}
								lh={{
									desktop: 40,
									mobile: 36
								}}
								className='login-section__form-title'
							>
								Creado para ti y tu familia
							</Title>
						</div>
						<div className='login-section__landing-image--mobile'>
							<img
								draggable={false}
								alt='Portada de RIMAC Seguros'
								src={rimacLanding}
							/>
						</div>
					</div>
					<Divider
						color='gray'
						className='login-section__form-divider'
					/>
					<Text
						size={14}
						lh={20}
						ls={0.2}
						fw='semibold'
						className='login-section__form-description'
					>
						Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
						asesoría. 100% online.
					</Text>
					<DNIField />
				</div>
			</div>
			<Sparkles />
		</main>
	)
}

export default Main
