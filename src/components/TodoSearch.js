import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

    function changeInput(event){
        setSearchValue(event.target.value)        
    };

    return(
        <div className='containSearch'>
            <input 
                type='search' 
                className='inputSearch' 
                placeholder="Search..."
                value={searchValue}
                onChange={changeInput}
            />
            <span className="material-symbols-outlined">search</span>
        </div>
    );
}

export { TodoSearch };