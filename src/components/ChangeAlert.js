import React from "react";
import { withStorageListener } from './withStorageListener'

function ChangeAlert ({show, toggleShow, synchronizeTodos}) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                    onClick={() => {
                        synchronizeTodos()
                        toggleShow()
                    }}
                    
                >Actualizar info</button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }