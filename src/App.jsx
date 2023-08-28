import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { GameContext } from './context/context'
import AppRouters from './components/AppRouters'
import { useState } from 'react'

const App = () => {
	const [words, setWords] = useState([])

	return (
		<GameContext.Provider
			value={{
				words,
				setWords,
			}}
		>
			<BrowserRouter>
				<div className="App">
					<AppRouters />
				</div>
			</BrowserRouter>
		</GameContext.Provider>
	)
}

export default App
