import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos }) {

    return(
        <h1 className="title">
            {
                (totalTodos === 0)
                ? `Agrega una nueva tarea` 
                : ((completedTodos === totalTodos) 
                    ? `Completaste todas las tareas.` 
                    : `Haz completado ${completedTodos}  tareas de ${totalTodos}.`
                  )
            }
        </h1>
    )
}

export { TodoCounter };