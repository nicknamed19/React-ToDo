import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


function useTodos() {

     //ESTADOS PARA MANEJAR LOS TODOS
    const {
        items : todos,
        saveItems : saveTodos,
        synchronizeItems : synchronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V2', []);  
    
    //ESTADOS DERIVADOS PARA INDICAR LA CANTIDAD DE TODOS Y LOS COMPLETADOS EN LA APP
    let completedTodos  = todos.filter(todo => !!todo.completed).length;
    let totalTodos = todos.length;

    //FUNCION PARA HACER TOGGLE CUANDO UN TASK ESTA COMPLETADO
    const checkedTask = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        )
        newTodos[todoIndex].completed ? (newTodos[todoIndex].completed = false) : (newTodos[todoIndex].completed = true);
        saveTodos(newTodos);
    }

    //FUNCIÓN PARA EDITAR TODO'S
    const editTodo = (id, newText) => {
        const newTodos = [...todos];
        const todoId = Number(id)
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === todoId
        )
        newTodos[todoIndex].text = newText
        saveTodos(newTodos);
    }


    //FUNCION PARA ELIMINAR TODOS
    const deleteTask = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
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
        const id = idGenerator(todos)
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
            id,
        })
        saveTodos(newTodos);
    };

    const [openModal, setOpenModal] = React.useState(false);

    return{
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
        synchronizeTodos,
        editTodo,
    }
}

function idGenerator(todoList) {
    if (!todoList.length) return 1

    const idList = todoList.map(todo => todo.id)
    const idMax = Math.max(...idList)
    return idMax + 1
}


export { useTodos };