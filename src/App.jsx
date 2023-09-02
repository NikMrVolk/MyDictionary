import { BrowserRouter } from 'react-router-dom'
import AppRouters from './components/AppRouters'
import { AuthContext } from './context/context'
import { useState } from 'react'
import './styles/App.css'

const App = () => {
	const [auth, setAuth] = useState(false)

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			<BrowserRouter>
				<div className="App">
					<AppRouters />
				</div>
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App
