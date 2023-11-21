import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function ProviderTodos({children}) {
    

     //ESTADOS PARA MANEJAR LOS TODOS
    const {
        items : todos,
        saveItems : saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);  
    
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

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };

    const [openModal, setOpenModal] = React.useState(false);

    return(
        <TodoContext.Provider value={{
            loading, 
            error, 
            completedTodos, 
            totalTodos, 
            searchValue, 
            setSearchValue, 
            sercheadTodo, 
            checkedTask, 
            deleteTask,
            addTodo,
            openModal, 
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, ProviderTodos };