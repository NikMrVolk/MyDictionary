import cl from './MyPagination.module.css'

const MyPagination = ({ pagesQty, setPage, currentPage }) => {
	return (
		<div className={cl.wrapper}>
			{pagesQty.map((page) => (
				<span
					key={page}
					className={
						page === currentPage
							? [cl.item, cl.active].join(' ')
							: cl.item
					}
					onClick={() => {
						setPage(page)
					}}
				>
					{page}
				</span>
			))}
		</div>
	)
}

export default MyPagination
