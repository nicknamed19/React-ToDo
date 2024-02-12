import '../styles/CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {

    return(
        <button 
            className="addTask"
            onClick={() => {
                        setOpenModal(state => !state)
                    }}
        >+</button>
    );
}

export { CreateTodoButton };