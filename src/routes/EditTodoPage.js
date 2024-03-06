import { useParams } from "react-router-dom"
import { Form } from "../components/Form"
import { useTodos } from "../hooks/useTodos"

function EditTodoPage() {
    const { id } = useParams()
    const { editTodo } = useTodos()

    return (
        <Form 
            label={'Edita esta tarea'}
            submitText={'Editar'}
            submitEvent={(newTodosValue) => editTodo(id, newTodosValue)}
        />
    )
}

export { EditTodoPage }