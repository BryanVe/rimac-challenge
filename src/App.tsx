import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RootLayout, StepperLayout } from './layouts'
import { LoginView, PlansView, SummaryView } from './views'

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
					},
					{
						path: '/summary',
						element: <SummaryView />
					}
				]
			}
		]
	}
])

const App = () => <RouterProvider router={router} />

export default App
