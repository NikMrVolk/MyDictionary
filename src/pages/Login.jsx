import { useContext, useEffect, useState } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context/context'

const Login = () => {
	const [text, setText] = useState({ login: '', password: '' })
	const { auth, setAuth } = useContext(AuthContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		setAuth(true)
		localStorage.setItem('auth', true)
	}

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setAuth(true)
		}
	}, [])

	return (
		<form
			className="login-form"
			onSubmit={(e) => {
				handleSubmit(e)
			}}
		>
			<MyInput
				type="text"
				placeholder="Enter login"
				value={text.login}
				onChange={(e) => {
					setText({ ...text, login: e.target.value })
				}}
			/>
			<br />
			<MyInput
				type="password"
				placeholder="Enter password"
				value={text.password}
				onChange={(e) => {
					setText({ ...text, password: e.target.value })
				}}
			/>
			<br />
			<MyButton>Log in</MyButton>
		</form>
	)
}

export default Login
