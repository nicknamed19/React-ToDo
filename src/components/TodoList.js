import '../styles/TodoList.css'

function TodoList({sercheadTodo, render}) {
    return(
        <ul>
            {sercheadTodo.map(render)}
        </ul>
    )
}

export { TodoList };