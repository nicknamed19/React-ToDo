import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1') {
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            setStorageChange(false)
        }

        return (
            <WrappedComponent 
                synchronizeTodos={props.synchronizeTodos}
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }