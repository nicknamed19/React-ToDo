import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';

function useSearchParams() {

  const location = useLocation();
  const history = useHistory();
  const { search } = location;

  const searchParams = queryString.parse(search);

  const setSearchParams = (newSearchParams) => {
    const newSearch = queryString.stringify(newSearchParams);
    // Obtener la instancia de la historia y actualizar directamente la propiedad search
    const newLocation = { ...location, search: `?${newSearch}` };
    history.replace(newLocation);
  };

  return [searchParams, setSearchParams];
}

export { useSearchParams }