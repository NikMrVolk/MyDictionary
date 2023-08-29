const MySelect = ({ sort, setSort, defaultValue, options }) => {
	return (
		<select
			value={sort}
			onChange={(e) => {
				setSort(e.target.value)
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
