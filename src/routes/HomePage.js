import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoHeader } from '../components/TodoHeader';
import { ErrorTodos } from '../components/ErrorTodos';
import { LoadingTodos } from '../components/LoadingTodos';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { useTodos } from '../hooks/useTodos';
import { EmptySearchedTodos } from '../components/EmptySearchedTodos';
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert'

//VARIABLES
/*const arrayTodo = [
  {text: 'Cortar tomate', completed: false},
  {text: 'Terminar el curso de React', completed: false},
  {text: 'Hacer el almuerzo', completed: true},
  {text: 'Buscar trabajo', completed: false}
]*/ 

function HomePage() {
  const navigate = useNavigate()
  
  const {
    loading, 
    error,           
    sercheadTodo, 
    checkedTask, 
    deleteTask, 
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    synchronizeTodos
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

            <TodoList
              sercheadTodo={sercheadTodo}
              totalTodos={totalTodos}
              onEmptySearchedTodos={<EmptySearchedTodos searchText={searchValue}/>}
              render={(todo => 
                <TodoItem 
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}         
                  checkedTask={() => checkedTask(todo.id)}
                  deleteTask={() => deleteTask(todo.id)}
                  editTask={() => navigate(`/edit/${todo.id}`, { state : { todo }})}
                />
              )}
            />
      
            <CreateTodoButton 
              onClick={() => navigate('/new')}
            />

            <ChangeAlertWithStorageListener 
              synchronizeTodos={synchronizeTodos}
            />
            
          </>
      }
    </>
  ) 
}

export { HomePage };