import { useLocation, useParams } from "react-router-dom"
import { Form } from "../components/Form"
import { useTodos } from "../hooks/useTodos"
import { LoadingTodos } from "../components/LoadingTodos";

function EditTodoPage() {
    const location = useLocation();
    const { id } = useParams();
    const todoId = Number(id);

    const { editTodo, getTodo, loading } = useTodos();
    let selectTodo;

    if(location.state?.todo) {
        selectTodo = location.state.todo
    } else if (loading) {
        return <LoadingTodos />
    } else {
        selectTodo = getTodo(todoId)
    }
    
    return (
        <Form 
            label={'Edita esta tarea'}
            submitText={'Editar'}
            submitEvent={(newTodosValue) => editTodo(todoId, newTodosValue)}
            selectTodo={selectTodo}    
        />
    )
    
}

export { EditTodoPage }