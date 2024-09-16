import React, { createContext, useCallback, useState } from 'react'

export type TAuthContext = {
	user?: TUserProfile
	setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>
}

export const AuthContext = createContext<Partial<TAuthContext>>({})

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
	const _user = sessionStorage.getItem('user')
	const [user, _setUser] = useState<TUser | undefined>(
		_user ? JSON.parse(_user) : undefined
	)

	const setUser = useCallback<TAuthContext['setUser']>(
		user => {
			if (user) sessionStorage.setItem('user', JSON.stringify(user))
			else sessionStorage.removeItem('user')
			_setUser(user)
		},
		[user]
	)

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
