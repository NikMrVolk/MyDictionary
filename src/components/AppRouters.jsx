import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/context'
import { privateRoutes, publicRoutes } from '../routes/routes'

const AppRouters = () => {
	const { auth } = useContext(AuthContext)

	return (
		<Routes>
			{auth
				? privateRoutes.map((rout) => (
						<Route
							key={rout.path}
							path={rout.path}
							element={rout.component}
							exact={rout.exact}
						/>
				  ))
				: publicRoutes.map((rout) => (
						<Route
							key={rout.path}
							path={rout.path}
							element={rout.component}
							exact={rout.exact}
						/>
				  ))}
		</Routes>
	)
}

export default AppRouters
