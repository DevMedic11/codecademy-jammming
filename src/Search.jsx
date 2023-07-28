import React, { useState } from 'react';
import { searchData } from './GetData';

export default function Search({accessToken}){
    const [inputValue, setInputValue]= useState('Artist, Song, Genre, etc.')
    const [searchValue, setSearchValue] = useState('');

    function handleFocus(){
          if (inputValue === 'Artist, Song, Genre, etc.') {
      setInputValue('');
      
    }
  }

    function handleBlur(){
          if (inputValue === '') {
      setInputValue('Artist, Song, Genre, etc.');
    } else {
      setSearchValue(inputValue);
    }
  }
    
    function handleChange(e){
      let newValue= e.target.value;
      setInputValue(newValue);
      setSearchValue(newValue);
    
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(searchValue);

    searchData(accessToken, searchValue)
    .then(data => console.log(data))
    .catch(error=> {
      console.error(error);
    });
  }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={inputValue} />
            <br/>
            <button type="submit">Search</button>
      </form>
    );
}