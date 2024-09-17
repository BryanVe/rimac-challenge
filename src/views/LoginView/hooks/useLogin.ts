import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { useAuth } from '~/hooks'
import { getProfileRequest } from '~/network/user'

const idTypes = [
	{
		label: 'DNI',
		value: 'dni'
	},
	{
		label: 'RUC',
		value: 'ruc'
	}
]

const validMockedFormValues = [
	{
		idType: 'dni',
		idNumber: '30216147',
		phone: '5130216147'
	}
]

const lengths = {
	phone: 9,
	dni: 8,
	ruc: 11
} as const

type TFormErrors = Partial<Record<keyof TUserCredentials, string>>

const initialFormValues: TUserCredentials = {
	idType: idTypes[0].value,
	idNumber: '',
	phone: '',
	isPrivacyAccepted: false,
	isCommercialAccepted: false
}

export const useLogin = () => {
	const navigate = useNavigate()
	const { setUser } = useAuth()
	const [formErrors, setFormErrors] = useState<TFormErrors>({})
	const [formValues, setFormValues] =
		useState<TUserCredentials>(initialFormValues)
	const { refetch: getProfile } = useQuery({
		queryKey: ['getProfile'],
		queryFn: async () => {
			try {
				return await getProfileRequest()
			} catch (error) {
				console.error(error)
			}
		},
		enabled: false
	})

	const handleFormValueChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name } = event.target
		let newFormValues: Partial<TUserCredentials> | undefined

		if (event.target.type === 'checkbox') {
			const { checked } = event.target as HTMLInputElement
			newFormValues = {
				...newFormValues,
				[name]: checked
			}
		} else {
			const { value } = event.target
			newFormValues = {
				...newFormValues,
				[name]: value
			}
		}

		if (name === 'idType' || name === 'idNumber') {
			resetFormError('idType')
			resetFormError('idNumber')
		} else resetFormError(name)
		setFormValues({
			...formValues,
			...newFormValues
		})
	}

	const validateFormValues = (formValues: TUserCredentials) => {
		const { idNumber, idType, isCommercialAccepted, isPrivacyAccepted, phone } =
			formValues
		let errors: TFormErrors | undefined

		if (idType.length === 0)
			errors = {
				...errors,
				idType: 'Debe ingresar un número de documento válido'
			}
		if (idType === 'dni' && idNumber.length !== lengths.dni)
			errors = {
				...errors,
				idNumber: `El DNI debe tener ${lengths.dni} dígitos`
			}
		if (idType === 'ruc' && idNumber.length !== lengths.ruc)
			errors = {
				...errors,
				idNumber: `El RUC debe tener ${lengths.ruc} dígitos`
			}
		if (phone.length !== lengths.phone)
			errors = {
				...errors,
				phone: `El celular debe tener ${lengths.phone} dígitos`
			}
		if (!isPrivacyAccepted)
			errors = {
				...errors,
				isPrivacyAccepted: 'Debe aceptar la política de privacidad'
			}
		if (!isCommercialAccepted)
			errors = {
				...errors,
				isCommercialAccepted:
					'Debe aceptar la política de comunicaciones comerciales'
			}

		return errors
	}

	const validateUser = (user: TUserCredentials) =>
		validMockedFormValues.some(
			validFormValue =>
				validFormValue.idType === user.idType &&
				validFormValue.idNumber === user.idNumber &&
				validFormValue.phone === user.phone
		)

	const resetFormError = (formErrorKey: string) =>
		setFormErrors({
			...formErrors,
			[formErrorKey]: ''
		})

	const login = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formErrors = validateFormValues(formValues)
		if (formErrors) return setFormErrors(formErrors)

		const isValidFormValues = validateUser(formValues)
		if (!isValidFormValues) return alert('Usuario no válido')

		const profile = await getProfile()
		if (!profile.data) return alert('Usuario no encontrado')

		const { idType, idNumber, phone } = formValues
		setUser({
			...profile.data.data,
			idType,
			idNumber,
			phone
		})

		navigate('/plans')
	}

	return {
		formValues,
		formErrors,
		idTypes,
		login,
		handleFormValueChange
	}
}
