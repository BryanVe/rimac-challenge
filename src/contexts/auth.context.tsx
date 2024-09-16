import React, { createContext, useCallback, useEffect, useState } from 'react'

export type TAuthContext = {
	user?: TUserProfile
	setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>
}

export const AuthContext = createContext<Partial<TAuthContext>>({})

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
	const [user, _setUser] = useState<TUser>()

	const setUser = useCallback<TAuthContext['setUser']>(
		user => {
			if (user) sessionStorage.setItem('user', JSON.stringify(user))
			_setUser(user)
		},
		[user]
	)

	useEffect(() => {
		const user = sessionStorage.getItem('user')

		if (user) _setUser(JSON.parse(user))
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
