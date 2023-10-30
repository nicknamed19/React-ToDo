import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
  
    let parseTodos;
  
    if (!localStorageItem) {
      parseTodos = localStorage.setItem(itemName, JSON.stringify(initialValue));
    } else {
      parseTodos = JSON.parse(localStorageItem);
    }
  
    const [items, setItems] = React.useState(parseTodos)
  
    const saveItems = (newTodos) => {
      localStorage.setItem(itemName, JSON.stringify(newTodos))
      setItems(newTodos);
    }
  
    return [
      items,
      saveItems,
    ]
  };

  export { useLocalStorage };