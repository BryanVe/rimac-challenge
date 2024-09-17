import React, { createContext, useCallback, useState } from 'react'

import { storage } from '~/utils/common'

export type TAuthContext = {
	user?: TUserProfile
	setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>
}

export const AuthContext = createContext<Partial<TAuthContext>>({})

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
	const _user = storage.getItem<TUser>('user')
	const [user, _setUser] = useState<TUser | undefined>(_user)

	const setUser = useCallback<TAuthContext['setUser']>(
		user => {
			if (user) storage.setItem('user', user)
			else storage.removeItem('user')
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
