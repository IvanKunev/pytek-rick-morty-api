import React from 'react'
import './Pagination.css'

import ReactPaginate from 'react-paginate'

function Pagination({ page, setPage, info }) {

  return <ReactPaginate 
    className='pagination gap-2'
    activeClassName='active'
    previousClassName='prev'
    pageClassName='page-item'
    breakClassName='break'
    pageLinkClassName='page-link'
    nextClassName='next'
    nextLinkClassName='next-label' 
    previousLinkClassName='prev-label' 
    pageCount={info?.pages}
    onPageChange={(pageNumber) => {
        setPage(pageNumber.selected + 1)
    }}
    forcePage={ page === 1 ? 0 : page - 1 } 
  />
    
  
}

export default Pagination
