import PropTypes from 'prop-types'


function Body({countries}) { 

  return (
    <div className='country mt-3'>
      <ul className="wrapper">
        {countries.map((country, index) => (
          <li className="country-list-item" key={index}>
            <strong>Name:</strong> {country.name.common}<br />
            <strong>Capital:</strong> {country.capital}<br />
            <img src={country.flags.svg} alt={`${country.name.common} Flag`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Body.propTypes = {
  countries: PropTypes.array
}
export default Body
