import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RootLayout, StepperLayout } from './layouts'
import { LoginView, PlansView } from './views'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <LoginView />
			},
			{
				element: <StepperLayout />,
				children: [
					{
						path: '/plans',
						element: <PlansView />
					}
				]
			}
		]
	}
])

const App = () => <RouterProvider router={router} />

export default App
