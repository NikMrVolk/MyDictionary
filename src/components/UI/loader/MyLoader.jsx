import cl from './MyLoader.module.css'

const MyLoader = () => {
	return (
		<div className={cl.loader__wrapper}>
			<div className={cl.loader__body}></div>
		</div>
	)
}

export default MyLoader
