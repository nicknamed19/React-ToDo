import { useHistory } from 'react-router-dom';
import '../styles/Form.css'
import { useState } from 'react';

function Form({ label, submitText, submitEvent, selectTodo }) {

    const history = useHistory()

    const [newTodosValue, setNewTodoValue] = useState(selectTodo?.text || '');
    
    const onSubmit = (event) => {
        event.preventDefault();
        submitEvent(newTodosValue);
        history.push('/');        
    }
    
    const onChange = (event) => setNewTodoValue(event.target.value);
    
    const onCancel = () => history.push('/');

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