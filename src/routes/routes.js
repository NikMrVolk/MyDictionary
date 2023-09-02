import About from "../pages/About"
import Dictionary from "../pages/Dictionary"
import Login from "../pages/Login"

export const privateRoutes = [
	{ path: '/about', component: <About />, exact: true },
	{ path: '/', component: <Dictionary />, exact: true },
	{ path: '*', component: <Dictionary />, exact: true },
]

export const publicRoutes = [
	{ path: '*', component: <Login />, exact: true },
]
