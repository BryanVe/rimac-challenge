import { rimacLanding } from '~/assets/images'
import { Divider, Text, Title } from '~/components'

import { LoginForm, PromotionBadge, Sparkles } from './components'

import './style.scss'

const landingImageAlt = 'Portada de RIMAC Seguros'

const Main = () => (
	<main className='main'>
		<Sparkles />
		<div className='main__content'>
			<div className='main__content__landing-image main__content__landing-image--desktop'>
				<img
					draggable={false}
					alt={landingImageAlt}
					src={rimacLanding}
				/>
			</div>
			<div className='main__content__right-section'>
				<div className='main__content__right-section__header'>
					<div>
						<PromotionBadge>Seguro Salud Flexible</PromotionBadge>
						<Title
							size={{
								desktop: 32,
								mobile: 28
							}}
							lh={{
								desktop: 40,
								mobile: 36
							}}
							className='main__content__right-section__header__title'
						>
							Creado para ti y tu familia
						</Title>
					</div>
					<div className='main__content__landing-image main__content__landing-image--mobile'>
						<img
							draggable={false}
							alt={landingImageAlt}
							src={rimacLanding}
						/>
					</div>
				</div>
				<Divider
					color='darkblue-300'
					className='main__content__right-section__divider'
				/>
				<Text
					size={14}
					lh={20}
					ls={0.2}
					fw='semibold'
					className='main__content__right-section__description'
				>
					Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
					asesoría. 100% online.
				</Text>
				<LoginForm />
			</div>
		</div>
	</main>
)

export default Main
