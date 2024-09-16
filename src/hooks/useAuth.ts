import { useContext } from 'react'

import { AuthContext, TAuthContext } from '~/contexts'

export const useAuth = () => useContext(AuthContext) as TAuthContext
