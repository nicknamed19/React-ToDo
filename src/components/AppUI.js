import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

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
      
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        
      <TodoList>
          {loading && <p>Cargando....</p>}
          {error && <p>Error, intentalo nuevamente</p>}
          
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

export { AppUI };