import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

//VARIABLES
const arrayTodo = [
  {text: 'Cortar tomate', completed: true},
  {text: 'Terminar el curso de React', completed: true},
  {text: 'Hacer el almuerzo', completed: true},
  {text: 'Buscar trabajo', completed: true}
]

function App() {
  return (
    <>
      
      <TodoCounter completed={5} total={10} />
      <TodoSearch />
        
      <TodoList>
          {arrayTodo.map(todo => 
            <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
          )}
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}

export default App;
