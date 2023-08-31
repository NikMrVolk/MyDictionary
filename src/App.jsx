import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import AppRouters from './components/AppRouters'

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<AppRouters />
			</div>
		</BrowserRouter>
	)
}

export default App
