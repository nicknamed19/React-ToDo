import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { ErrorTodos } from './components/ErrorTodos';
import { LoadingTodos } from './components/LoadingTodos';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { Form } from './components/Form';
import { useTodos } from './hooks/useTodos';

//VARIABLES
/*const arrayTodo = [
  {text: 'Cortar tomate', completed: false},
  {text: 'Terminar el curso de React', completed: false},
  {text: 'Hacer el almuerzo', completed: true},
  {text: 'Buscar trabajo', completed: false}
]*/ 

function App() {
  
  const {
    loading, 
    error,           
    sercheadTodo, 
    checkedTask, 
    deleteTask, 
    openModal,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    setOpenModal,
    addTodo,
  } = useTodos()

  return (
    <>
      {error && <ErrorTodos/>}

      {loading 
        ? <LoadingTodos/> 
        : <>
            <TodoHeader>
              <TodoCounter
                completedTodos={completedTodos} 
                totalTodos={totalTodos}
              />
        
              <TodoSearch 
                searchValue={searchValue} 
                setSearchValue={setSearchValue}
              />
            </TodoHeader>

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
      
            <CreateTodoButton 
              setOpenModal={setOpenModal}
            />

            {openModal &&
              <Modal>
                <Form 
                  setOpenModal={setOpenModal}
                  addTodo={addTodo}
                />
              </Modal>
            } 
            
          </>
      }
    </>
  ) 
}

export default App;
