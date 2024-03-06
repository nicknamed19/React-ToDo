import '../styles/TodoItem.css'

function TodoItem(props){

    return(
      <li className='todo-item'>
        <div className='task-check--container'>

          <span 
            className={
              `material-symbols-outlined check-hover ${props.completed ? "check-activate" : ''}`
            }
            onClick={props.checkedTask}
          >
            check_circle
          </span>

          <p className={props.completed ? "task-complete" : ''}>{props.text}</p>

        </div>
        
        <div className='cancel-edit-container'>

          <span 
            className="material-symbols-outlined edit-hover"
            onClick={() => console.log('editar todo')}
          >
            edit
          </span>

          <span 
            className='material-symbols-outlined cancel-hover'
            onClick={props.deleteTask}
          >
            cancel
          </span>

        </div>
      </li>
    );
  }

  export { TodoItem };