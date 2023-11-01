import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { LoadingTodos } from './LoadingTodos';
import { ErrorTodos } from './ErrorTodos';
import { CreateTodoButton } from './CreateTodoButton';

function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    sercheadTodo,
    checkedTask,
    deleteTask,
    loading,
    error,
}) {
    return (
      <>
        {loading 
          ? <LoadingTodos/> 
          : <>
              <TodoCounter 
                completed={completedTodos} 
                total={totalTodos} 
              />

              <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />

              <CreateTodoButton />
            </>
        }
        
        {error && <ErrorTodos/>}
          
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
        
      </>
    );
}

export { AppUI };