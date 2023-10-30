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
          >check_circle</span>
          <p className={props.completed ? "task-complete" : ''}>{props.text}</p>

        </div>
        
        <span 
          className='material-symbols-outlined cancel-hover'
          onClick={props.deleteTask}
        >cancel</span>
      </li>
    );
  }

  export { TodoItem };