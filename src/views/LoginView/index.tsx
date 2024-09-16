import { Navigate } from 'react-router-dom'

import { useAuth } from '~/hooks'

import { Footer, Main } from './components'

const LoginView = () => {
	const { user } = useAuth()

	if (user) return <Navigate to='/plans' />

	return (
		<>
			<Main />
			<Footer />
		</>
	)
}

export default LoginView
