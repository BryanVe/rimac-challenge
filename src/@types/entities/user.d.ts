type TUserProfile = {
	name: string
	lastName: string
	birthDay: string
}

type TUserCredentials = {
	idType: string
	idNumber: string
	phone: string
	isPrivacyAccepted: boolean
	isCommercialAccepted: boolean
}

type TUser = Omit<
	TUserCredentials,
	'isPrivacyAccepted' | 'isCommercialAccepted'
> &
	TUserProfile
