import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const StartGame = ({name, setName, modes, start, setModalActive}) => {

	return (
		<div className="wrapper start-game">
			<div>Enter your name and choose game</div>
			<MyInput
				type="text"
				placeholder="Enter name"
				value={name}
				onChange={(e) => {
					setName(e.target.value)
				}}
			/>
			<div>Choose game:</div>
			<div className="game__modes">
				{modes.map((mode) => (
					<MyButton
						key={mode}
						onClick={() => {
							start(name, mode)
							setModalActive(false)
						}}
					>
						{mode}
					</MyButton>
				))}
			</div>
		</div>
	)
}


export default StartGame;
