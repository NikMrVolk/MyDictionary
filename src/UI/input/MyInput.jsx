import { forwardRef } from 'react'
import cl from './MyInput.module.css'

const MyInput = forwardRef((props, ref) => {
	return <input {...props} className={cl.MyInput} ref={ref}></input>
})

export default MyInput
