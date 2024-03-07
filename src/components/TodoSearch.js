import React from 'react';
import '../styles/TodoSearch.css';
import { useSearchParams } from 'react-router-dom';

function TodoSearch({ searchValue, setSearchValue }) {
    const [searchParams, setSearchParams] = useSearchParams()
    
    function changeInput(event){
        const value = event.target.value
        setSearchValue(value)
        setSearchParams({ search: value})
    };
    
    
    React.useEffect(() => {
        const search = searchParams.get('search') ?? '';
        setSearchValue(search);
    }, [searchParams])

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