import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const SearchWords = ({ search, setSearch }) => {
	const options = [
		{ value: 'title', name: 'English' },
		{ value: 'body', name: 'Russian' },
	]

	return (
		<>
			<MySelect
				sort={search.sort}
				setSearch={setSearch}
				defaultValue={'Sorted by'}
				options={options}
				onChange={(value) =>
					setSearch({ ...search, sort: value })
				}
			/>
			<MyInput
				type="text"
				placeholder="Search"
				value={search.query}
				onChange={(e) => setSearch({ ...search, query: e.target.value })}
			/>
		</>
	)
}

export default SearchWords
