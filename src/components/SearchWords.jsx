import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const SearchWords = ({ search, setSearch }) => {
	const options = [
		{ value: 'title', name: 'English' },
		{ value: 'body', name: 'Russian' },
	]

	const handleChangeSelect = (e) => {
		setSearch({ ...search, sort: e.target.value })
	}

	return (
		<>
			<MySelect
				sort={search.sort}
				setSearch={setSearch}
				defaultValue={'Sorted by'}
				options={options}
				changeSelect={handleChangeSelect}
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
