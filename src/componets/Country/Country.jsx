import React, { useState } from 'react';
import './Country.css'

// rsc dibo tayle component onujai function hye jabe

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited]  = useState(false)
    // console.log(country.name.common)
 
    const handleVisited = () =>{
        // console.log('visited')
        // basic system 
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // second 
        // setVisited(visited ? false : true)
        // third
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'} `}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}
                  {country.area.area > 300000 ?
                    " Big Country"
                   : 
                   " Small Country"}</p>
                   <button onClick={handleVisited}>
                    {visited ? 'visited': 'not visited'}
                   </button>
                   <button onClick={() => { handleVisitedFlags(country.flags.flags.png)} }> Add Visited Flag</button>
        </div>
    );
};

export default Country;