import '../styles/TodoList.css'

function TodoList({sercheadTodo, render, totalTodos, onEmptySearchedTodos }) {
    return(
        <ul>
            {(!sercheadTodo.length && totalTodos) ? onEmptySearchedTodos : sercheadTodo.map(render)}
        </ul>
    )
}

export { TodoList };