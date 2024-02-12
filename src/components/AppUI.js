import React from 'react';
import { TodoHeader } from './TodoHeader';
import { ErrorTodos } from './ErrorTodos';
import { LoadingTodos } from './LoadingTodos';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { Form } from './Form';
import { TodoContext } from '../context/TodoContext';

function AppUI () {

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
  } = React.useContext(TodoContext)

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
      
           <CreateTodoButton />

           {openModal &&
            <Modal>
              <Form></Form>
            </Modal>
           } 
            
          </>
      }
    </>
  )
}        

export { AppUI };