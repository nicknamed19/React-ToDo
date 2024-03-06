import { Form } from "../components/Form"
import { useTodos } from "../hooks/useTodos"

function NewTodoPage() {
    const { addTodo, } = useTodos()
    return (
        <Form 
            label={'Agrega una nueva tarea'}
            submitText={'Agregar'}
            submitEvent={(newTodoValue) => addTodo(newTodoValue)}
        />
    )
}

export { NewTodoPage }