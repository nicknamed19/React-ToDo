import { TodoContext } from '../context/TodoContext';
import '../styles/TodoSearch.css';
import React from 'react';

function TodoSearch() {
    
    const {
        searchValue, 
        setSearchValue,
    } = React.useContext(TodoContext);

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