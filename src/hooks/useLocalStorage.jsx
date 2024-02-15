import React from "react";

function useLocalStorage(itemName, initialValue) {
  
    const [items, setItems] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    const [syncItems, setSyncItems] = React.useState(true);

    React.useEffect(() => {

      setTimeout(() => {
        
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parseTodos;
        
          if (!localStorageItem) {
            parseTodos = localStorage.setItem(itemName, JSON.stringify(initialValue));
          } else {
            parseTodos = JSON.parse(localStorageItem);
            setItems(parseTodos);
          };
  
          setLoading(false);
          setSyncItems(true)
  
        } catch (error) {
          setLoading(false);
          setError(true);
        }

      }, 2000)
      
    }, [syncItems]);

    const synchronizeItems = () => {
      setLoading(true)
      setSyncItems(false)
    }
  
    const saveItems = (newTodos) => {
      localStorage.setItem(itemName, JSON.stringify(newTodos))
      setItems(newTodos);
    }
  
    return {
      items,
      saveItems,
      loading,
      error,
      synchronizeItems
    }
    
  };

  export { useLocalStorage };