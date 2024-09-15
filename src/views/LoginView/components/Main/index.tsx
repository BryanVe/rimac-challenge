import { Link, useNavigate } from 'react-router-dom'

import { rimacLanding } from '~/assets/images'
import {
	Button,
	Checkbox,
	Divider,
	NumberInput,
	Text,
	Title
} from '~/components'

import { DNIField, Sparkles } from './components'

import './style.scss'

const landingImageAlt = 'Portada de RIMAC Seguros'

const Main = () => {
	const navigate = useNavigate()

	const quote = () => {
		navigate('/plans')
	}

	return (
		<main className='login-section'>
			<Sparkles />
			<div className='login-section__content'>
				<div className='login-section__landing-image login-section__landing-image--desktop'>
					<img
						draggable={false}
						alt={landingImageAlt}
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
						<div className='login-section__landing-image login-section__landing-image--mobile'>
							<img
								draggable={false}
								alt={landingImageAlt}
								src={rimacLanding}
							/>
						</div>
					</div>
					<Divider
						color='darkblue-300'
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
					<NumberInput
						placeholder='Celular'
						className='login-section__form-phone-input'
					/>
					<Checkbox
						label='Acepto la Política de Privacidad'
						className='login-section__form-privacy-checkbox'
					/>
					<Checkbox
						label='Acepto la Política Comunicaciones Comerciales'
						className='login-section__form-commercial-checkbox'
					/>
					<Link
						to='#'
						className='login-section__form-terms-link'
					>
						<Text
							span
							size={12}
							lh={20}
							ls={0.1}
							fw='semibold'
						>
							Aplican Términos y Condiciones.
						</Text>
					</Link>
					<Button
						className='login-section__form__quote-button login-section__form__quote-button--desktop'
						onClick={quote}
					>
						Cotiza aquí
					</Button>
					<Button
						size='md'
						className='login-section__form__quote-button login-section__form__quote-button--mobile'
						onClick={quote}
					>
						Cotiza aquí
					</Button>
				</div>
			</div>
		</main>
	)
}

export default Main
