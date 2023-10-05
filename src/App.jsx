import { useState, useEffect } from "react";
import Body from './components/Body'
import Pagination from "./components/Pagination";
import './index.css'
import Search from "./components/Search";
import Card from "./shared/Card";

function App() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countryPerPage = 15;
  const [search, setSearch] = useState('');


  const url = 'https://restcountries.com/v3.1/all?fields=name,capital,flags'
  useEffect(() => {
    fetchCountries()
  }, [])

  const handleSearchFinally = (idk) => {
    setSearch(idk)
  }
  
  const fetchCountries = async () => {
    const res = await fetch(url)
    res.json().then(json => {
      setCountries(json)
    })
  }

  
  
  // Get current page
  const indexOfLastPost = currentPage * countryPerPage
  const indexOfFirstPost = indexOfLastPost - countryPerPage
  
  const currentCountry =  countries.filter((country) =>{
    return search.toLocaleLowerCase() === '' ? country : country.name.common.toLocaleLowerCase().includes(search)
  }).slice(indexOfFirstPost, indexOfLastPost)

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const prePage = () => {
    if(currentPage !== indexOfFirstPost){
      setCurrentPage(currentPage - 1)
      // setCountries(currentCountry)
    }
  }
  const nextPage = () => {
    if(currentPage !== indexOfLastPost){
      setCurrentPage(currentPage + 1)
      // setCountries(currentCountry)
    }
  }

  console.log(search)

  return (
    <Card>
      <h1 className="header">NATIONAL EMBLEMS</h1>
      <Search onSearch={handleSearchFinally} />
      <Pagination currentPage={currentPage} countryPerPage={countryPerPage} totalCountries={countries.length} paginate={paginate} prePage={prePage} nextPage={nextPage} />
      <Body countries={currentCountry}  />
    </Card>
  );
}

export default App