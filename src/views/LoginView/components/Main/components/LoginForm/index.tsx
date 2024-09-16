import { Link } from 'react-router-dom'

import { Button, Checkbox, NumberInput, Select, Text } from '~/components'
import { useLogin } from '~/views/LoginView/hooks'

import './style.scss'

const LoginForm = () => {
	const { formValues, formErrors, idTypes, login, handleFormValueChange } =
		useLogin()

	return (
		<form
			className='login-form'
			onSubmit={login}
		>
			<div className='id-input'>
				<div className='id-input__wrapper'>
					<Select
						options={idTypes}
						className='id-input__wrapper__select'
						name='idType'
						value={formValues.idType}
						onChange={handleFormValueChange}
					/>
					<NumberInput
						placeholder='Nro. de documento'
						className='id-input__wrapper__number-input'
						name='idNumber'
						value={formValues.idNumber}
						onChange={handleFormValueChange}
					/>
				</div>
				{formErrors?.idType && (
					<div className='id-input__error'>* {formErrors.idType}</div>
				)}
				{formErrors?.idNumber && (
					<div className='id-input__error'>* {formErrors.idNumber}</div>
				)}
			</div>
			<NumberInput
				placeholder='Celular'
				className='phone-input'
				name='phone'
				value={formValues.phone}
				onChange={handleFormValueChange}
				error={formErrors?.phone}
			/>
			<Checkbox
				label='Acepto la Política de Privacidad'
				className='privacy-checkbox'
				name='isPrivacyAccepted'
				checked={formValues.isPrivacyAccepted}
				onChange={handleFormValueChange}
				error={formErrors?.isPrivacyAccepted}
			/>
			<Checkbox
				label='Acepto la Política Comunicaciones Comerciales'
				className='commercial-checkbox'
				name='isCommercialAccepted'
				checked={formValues.isCommercialAccepted}
				onChange={handleFormValueChange}
				error={formErrors?.isCommercialAccepted}
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
				type='submit'
				className='quote-button quote-button--desktop'
			>
				Cotiza aquí
			</Button>
			<Button
				type='submit'
				size='md'
				className='quote-button quote-button--mobile'
			>
				Cotiza aquí
			</Button>
		</form>
	)
}

export default LoginForm
