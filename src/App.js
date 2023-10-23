import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

//VARIABLES
const arrayTodo = [
  {text: 'Cortar tomate', completed: false},
  {text: 'Terminar el curso de React', completed: false},
  {text: 'Hacer el almuerzo', completed: true},
  {text: 'Buscar trabajo', completed: false}
]

//COMPONENTES
function App() {
  //ESTADOS PARA MANEJAR EL BUSCADOR
  const [searchValue, setSearchValue] = React.useState('');

  //ESTADOS PARA MANEJAR LOS TODOS
  const [todos, setTodos] = React.useState(arrayTodo);  

  //ESTADOS DERIVADOS PARA INDICAR LA CANTIDAD DE TODOS Y LOS COMPLETADOS EN LA APP
  let completedTodos  = todos.filter(todo => !!todo.completed).length;
  let totalTodos = todos.length;

  //FILTRO PARA EL BUSCADOR DE TODOS |ESTADO DERIVADO|
  const sercheadTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  //FUNCION PARA HACER TOGGLE CUANDO UN TASK ESTA COMPLETADO
  const checkedTask = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed ? (newTodos[todoIndex].completed = false) : (newTodos[todoIndex].completed = true);
    setTodos(newTodos);
  }

  //FUNCION PARA ELIMINAR TODOS
  const deleteTask = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

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
