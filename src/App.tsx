import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './layouts'
import { LoginView } from './views'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <LoginView />
			}
		]
	}
])

const App = () => <RouterProvider router={router} />

export default App
