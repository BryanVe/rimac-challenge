import { Link, useNavigate } from 'react-router-dom'

import { Button, Checkbox, NumberInput, Select, Text } from '~/components'

import './style.scss'

const LoginForm = () => {
	const navigate = useNavigate()

	const quote = () => {
		navigate('/plans')
	}

	return (
		<form className='login-form'>
			<div className='id-input'>
				<Select
					options={[
						{
							label: 'DNI',
							value: 'dni'
						},
						{
							label: 'RUC',
							value: 'ruc'
						}
					]}
					className='id-input__select'
				/>
				<NumberInput
					placeholder='Nro. de documento'
					className='id-input__number-input'
				/>
			</div>
			<NumberInput
				placeholder='Celular'
				className='phone-input'
			/>
			<Checkbox
				label='Acepto la Política de Privacidad'
				className='privacy-checkbox'
			/>
			<Checkbox
				label='Acepto la Política Comunicaciones Comerciales'
				className='commercial-checkbox'
			/>
			<Link
				to='#'
				className='terms-link'
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
				className='quote-button quote-button--desktop'
				onClick={quote}
			>
				Cotiza aquí
			</Button>
			<Button
				size='md'
				className='quote-button quote-button--mobile'
				onClick={quote}
			>
				Cotiza aquí
			</Button>
		</form>
	)
}

export default LoginForm
