import cl from './MyButton.module.css'

const MyButton = (props) => {
  return (
    <button {...props} className={cl.MyButton}>{props.children}</button>
  )
}

export default MyButton