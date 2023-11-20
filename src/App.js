import { AppUI } from './components/AppUI';
import React from 'react';
import { ProviderTodos } from './context/TodoContext';

//VARIABLES
/*const arrayTodo = [
  {text: 'Cortar tomate', completed: false},
  {text: 'Terminar el curso de React', completed: false},
  {text: 'Hacer el almuerzo', completed: true},
  {text: 'Buscar trabajo', completed: false}
]*/ 

function App() {
  
  return (
    
      <ProviderTodos>
        <AppUI />        
      </ProviderTodos>
        
  );  
}

export default App;
