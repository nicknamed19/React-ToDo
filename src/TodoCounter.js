import './TodoCounter.css';

function TodoCounter({ completed, total }) {

    const noCero = ( total > 0 && completed > 0);
    const equal = (completed === total);
    const noTask = (completed === 0 && total === 0);

    if (noTask) {
        return(
            <h1>
                Agrega una tarea
            </h1>
        )
    } else if (noCero && equal) {
        return(
            <h1>
                completaste todas las tareas
            </h1>
        )
    } else {
        <h1>
            {`Haz completado ${completed}  tareas de ${total}.`}
        </h1>
    }
    /*return(
        <h1 className="title">
            {
                noTask
                ? `Agrega una nueva tarea` 
                : ''
            }

            {
                equal 
                ? `Completaste todas las tareas.` 
                : `Haz completado ${completed}  tareas de ${total}.`
            } 

        </h1>
    )*/
}

export { TodoCounter }