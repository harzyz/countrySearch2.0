import PropTypes from 'prop-types'


function Pagination({ countryPerPage, totalCountries, currentPage, paginate, prePage, nextPage }) {
  const npage = Math.ceil(totalCountries / countryPerPage)
  // const pageNumbers = [...Array(npage + 1).keys()].slice(1);

  const pageNumbers = []
  for(let i = 1; i <= npage; i++){
    pageNumbers.push(i);
  }
 
  return (
    <nav className='pageOO'>
      <ul className='pagination'>
        <li className="page-item">
          <a href="#" className="page-link"
          onClick={prePage}>
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
          <a href="#" className="page-link"
          onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link"
          onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}
Pagination.propTypes ={
  countryPerPage: PropTypes.number,
  totalCountries: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
  prePage: PropTypes.func,
  nextPage: PropTypes.func
}
export default Pagination

