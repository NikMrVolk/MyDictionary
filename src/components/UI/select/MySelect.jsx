const MySelect = ({ sort, changeSelect, defaultValue, options }) => {
	return (
		<select
			value={sort}
			onChange={(e) => {
				changeSelect(e)
			}}
		>
			<option disabled value="">
				{defaultValue}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default MySelect
