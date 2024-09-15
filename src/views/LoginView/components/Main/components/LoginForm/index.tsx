import { Link, useNavigate } from 'react-router-dom'

import { Button, Checkbox, NumberInput, Text } from '~/components'

import { IDInput } from './components'

const LoginForm = () => {
	const navigate = useNavigate()

	const quote = () => {
		navigate('/plans')
	}

	return (
		<form className='main__content__right-section__login-form'>
			<IDInput />
			<NumberInput
				placeholder='Celular'
				className='main__content__right-section__login-form__phone-input'
			/>
			<Checkbox
				label='Acepto la Política de Privacidad'
				className='main__content__right-section__login-form__privacy-checkbox'
			/>
			<Checkbox
				label='Acepto la Política Comunicaciones Comerciales'
				className='main__content__right-section__login-form__commercial-checkbox'
			/>
			<Link
				to='#'
				className='main__content__right-section__login-form__terms-link'
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
				className='main__content__right-section__login-form__quote-button main__content__right-section__login-form__quote-button--desktop'
				onClick={quote}
			>
				Cotiza aquí
			</Button>
			<Button
				size='md'
				className='main__content__right-section__login-form__quote-button main__content__right-section__login-form__quote-button--mobile'
				onClick={quote}
			>
				Cotiza aquí
			</Button>
		</form>
	)
}

export default LoginForm
