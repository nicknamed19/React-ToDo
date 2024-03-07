import { useNavigate } from 'react-router-dom';
import '../styles/Form.css'
import { useState } from 'react';

function Form({ label, submitText, submitEvent, selectTodo }) {

    const navigate = useNavigate()

    const [newTodosValue, setNewTodoValue] = useState(selectTodo?.text || '');
    
    const onSubmit = (event) => {
        event.preventDefault();
        submitEvent(newTodosValue);
        navigate('/');        
    }
    
    const onChange = (event) => setNewTodoValue(event.target.value);
    
    const onCancel = () => navigate('/');

    return(
        <form className="form" onSubmit={onSubmit}>

            <p>{label}</p>

            <textarea 
                placeholder='New task...'
                value={newTodosValue}
                onChange={onChange}
            >{newTodosValue}</textarea>

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
                >{submitText}</button>

            </div>

        </form>
    )
}

export { Form };