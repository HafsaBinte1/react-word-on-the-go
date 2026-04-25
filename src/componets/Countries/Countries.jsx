import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) =>{
      console.log("Visited country clicked", country)
      const newVisitedCountries = [...visitedCountries, country]
      setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) =>{
      // console.log("FLags Added", flag)
      const newVistedFlags = [...visitedFlags, flag]
      setVisitedFlags(newVistedFlags)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries)
    return (
      <>
        <h1>In the  countries: {countries.length}</h1>
        <h3>Total Country visited:{visitedCountries.length} </h3>
        <h3>Total visited Flags :{visitedFlags.length} </h3>
        
        <ol>
          {
            visitedCountries.map(country => <li
            key={country.cca3.cca3}>country.name.common</li>)
            
          }
        </ol>
        <div className='visited-flag-container img'>
          {
            visitedFlags.map((flag, index) => <img key={index}
           src={flag}></img>)
            
          }
        </div>
          <div className='countries'>
            {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    country = {country}
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Country>)
            }
        </div>
      </>
    );
};

export default Countries;