import '../styles/CreateTodoButton.css'

function CreateTodoButton() {
    const clickButton = event => {
        console.log(event);
    }
    return(
        <button 
            className="addTask"
            onClick={clickButton}
        >+</button>
    );
}

export { CreateTodoButton };