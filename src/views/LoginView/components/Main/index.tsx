import { rimacLanding } from '~/assets/images'

import { Sparkles } from './components'

import './style.scss'

const Main = () => {
	return (
		<main className='login-section'>
			<div className='login-section__content'>
				<div className='login-section__landing-image'>
					<img
						draggable={false}
						alt='Portada de RIMAC Seguros'
						src={rimacLanding}
					/>
				</div>
				<div className='login-section__form'>
					<div className='tag-promo'>Seguro Salud Flexible</div>
					<div>
						<h1 className='login-section__form-title'>
							Creado para ti y tu familia
						</h1>
						<div className='login-section__form-divider' />
					</div>
					<p className='login-section__form-description'>
						Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
						asesoría. 100% online.
					</p>
				</div>
			</div>
			<Sparkles />
		</main>
	)
}

export default Main
