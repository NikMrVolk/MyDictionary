const MySelect = ({ sort, defaultValue, options, onChange }) => {
	return (
		<select
			value={sort}
			onChange={(event) => onChange(event.target.value)}
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
