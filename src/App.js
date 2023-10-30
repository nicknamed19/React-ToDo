import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';

//VARIABLES
const arrayTodo = [
  {text: 'Cortar tomate', completed: false},
  {text: 'Terminar el curso de React', completed: false},
  {text: 'Hacer el almuerzo', completed: true},
  {text: 'Buscar trabajo', completed: false}
] 

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
}


function App() {
  
  //ESTADOS PARA MANEJAR LOS TODOS
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', arrayTodo);  
  
  //ESTADOS DERIVADOS PARA INDICAR LA CANTIDAD DE TODOS Y LOS COMPLETADOS EN LA APP
  let completedTodos  = todos.filter(todo => !!todo.completed).length;
  let totalTodos = todos.length;

  //FUNCION PARA HACER TOGGLE CUANDO UN TASK ESTA COMPLETADO
  const checkedTask = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed ? (newTodos[todoIndex].completed = false) : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  }

  //FUNCION PARA ELIMINAR TODOS
  const deleteTask = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  
  //ESTADOS PARA MANEJAR EL BUSCADOR
  const [searchValue, setSearchValue] = React.useState('');
  
  //FILTRO PARA EL BUSCADOR DE TODOS |ESTADO DERIVADO|
  const sercheadTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  
  return (
    <>
      
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        
      <TodoList>
          {sercheadTodo.map(todo => 
            <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}         
            checkedTask={() => checkedTask(todo.text)}
            deleteTask={() => deleteTask(todo.text)}
            />
          )}
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}

export default App;
