import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {createFilterOptions} from '@material-ui/lab/Autocomplete'

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option,
  });


  return (

    <Autocomplete
      id="filter-demo"
      options={countries}
      getOptionLabel={(option) => option}
      filterOptions={filterOptions}
      style={{ width: 300 }}
      onChange={(e) => handleCountryChange(e.target.textContent)}
      renderInput={(params) => <TextField {...params}  label="Countries" variant="outlined" />}
    />


  );
};

export default Countries;