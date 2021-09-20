import React from 'react';
import './Country.css'

const Country = (proops) => {
    const { flag, name, capital, population } = proops.country;
    return (
        <div className="country">
            <h3>Country : {name}</h3>
            <img src={flag} alt="" />
            <p>Capital Name : {capital}</p>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;