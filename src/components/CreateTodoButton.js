import '../styles/CreateTodoButton.css'

function CreateTodoButton({ onClick }) {

    return(
        <button 
            className="addTask"
            onClick={onClick}
        >+</button>
    );
}

export { CreateTodoButton };