import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function useSearchParams() {
  const location = useLocation();
  const { search } = location;
  console.log(location);

  const searchParams = queryString.parse(search);

  const setSearchParams = (newSearchParams) => {
      console.log(newSearchParams);
    const newSearch = queryString.stringify(newSearchParams);
    console.log(newSearch);
    // Actualizar la ubicación del navegador con la nueva cadena de búsqueda
    window.history.pushState(null, '', `${location.pathname}?${newSearch}`);
  };

  return [searchParams, setSearchParams];
}

export { useSearchParams }