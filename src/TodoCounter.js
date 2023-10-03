function TodoCounter({ completed, total }) {
    return(
        <h1>
            Has completado {completed} tareas de {total}
        </h1>
    )
}

export { TodoCounter }