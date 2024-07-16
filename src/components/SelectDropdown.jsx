import React, {useState,useEffect} from 'react';

const countries = [
    {
        name: 'India', value: 'IN', cities: [
            'Delhi', 'Mumbai'
        ]
    },
    {
        name: 'Pak', value: 'PK', cities: [
            'Lahore', 'Karachi'
        ]
    },
    {
        name: 'Bangladesh', value: 'BG', cities: [
            'Dhaka', 'Chittagong'
        ]
    },
]

const SelectDropdown = () => {
    const [country, setCountry] = useState([]);

  useEffect(() => {
    console.log(country[0]);
    console.log(country[1]);
  }, [country]);

  return (
    <div className="App">
      <div>
        <label>Country:</label>
        <select value={country} onChange={(e) =>{console.log(e.target.value); setCountry(e.target.value)}}>
            {countries.map((country, index) => {
                return <option value={index}>{country.name}</option>
            })}
        </select>
        <label>City:</label>
        <select>
            {countries[country] && countries[country].cities.map((city, index) => {
                return <option value={index}>{city}</option>
            })}
        </select>
      </div>
    </div>
    )
}

export default SelectDropdown;