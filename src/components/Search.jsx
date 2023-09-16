import { useState } from "react";
import PropTypes from 'prop-types'


function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(searchTerm.toLocaleLowerCase());
  };

  return (
    <div className="centerSearch">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        className="form-control"
        onChange={handleInputChange}
      />
    </div>
  );
}


Search.propTypes = {
  onSearch: PropTypes.func
}
export default Search
