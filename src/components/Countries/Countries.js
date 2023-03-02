import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const[countries,setCountries] = useState([])

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountries(data))
    } ,[])
    return (
        <div>
            <h1>Hello from Countries....</h1>
            <h5>Total Countris : {countries.length}</h5>
            <div className='country-container'>
                {
                    countries.map(country =>
                        <Country 
                        country={country}
                        key={country.cca3}
                        
                        
                        /* population={country.population}
                        area={country.area} */
                        

                        ></Country>
                    )
                }
            </div>          
        </div>
    );
};

export default Countries;