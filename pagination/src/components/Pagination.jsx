const Pagination = ({
    goToPreviousPage,
    noOfPages,
    currentPage,
    handlePageChange,
    goToNextPage
}) => {
    return (
        <div className='pagination-container' >
            <span className='page-number' onClick={() => goToPreviousPage()} >⬅️</span>

            <div className='pagination-number' >{[...Array(noOfPages).keys()].map((n) => {
                return <span className={`page-number ${n === currentPage ? 'higlight' : ''}`} key={n} onClick={() => handlePageChange(n)} >{n}</span>
            })}</div>
            <span className='page-number' onClick={() => goToNextPage()} >➡️</span>
        </div>
    )
      
}

export default Pagination