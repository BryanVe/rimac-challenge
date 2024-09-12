import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './layouts'

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <div>Main</div>
			}
		]
	}
])

const App = () => <RouterProvider router={router} />

export default App
