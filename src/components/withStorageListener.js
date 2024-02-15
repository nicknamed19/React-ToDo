import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1') {
                console.log('hubo cambios');
                setStorageChange(true)
            }
        })

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={setStorageChange}
            />
        )
    }
}

export { withStorageListener }