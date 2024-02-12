import '../styles/Form.css'
import { useState } from 'react';


function Form({ addTodo, setOpenModal }) {

    const [newTodosValue, setNewTodoValue] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodosValue);
        setOpenModal(false);
        
    }
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return(
        <form className="form" onSubmit={onSubmit}>
            <p>Agrega una nueva tarea</p>
            <textarea 
                placeholder='New task...'
                value={newTodosValue}
                onChange={onChange}
            />
            <div className='TodoForm-button-content'>

                <button 
                    className='TodoForm-button cancelar'
                    type='button'
                    onClick={onCancel}
                >Cancelar</button>

                <button 
                    className='TodoForm-button agregar'
                    type='submit'
                    onClick={onSubmit}
                >Agregar</button>
            </div>

        </form>
    )
}

export { Form };