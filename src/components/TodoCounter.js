import '../styles/TodoCounter.css';

function TodoCounter({ completed, total }) {

    return(
        <h1 className="title">
            {
                (total === 0)
                ? `Agrega una nueva tarea` 
                : ((completed === total) 
                    ? `Completaste todas las tareas.` 
                    : `Haz completado ${completed}  tareas de ${total}.`
                  )
            }
        </h1>
    )
}

export { TodoCounter };