import React from "react";
import { withStorageListener } from './withStorageListener'
import { Modal } from "./Modal";
import '../styles/ChangeAlert.css'

function ChangeAlert ({show, toggleShow, synchronizeTodos}) {
    if (show) {
        return (
            <Modal>
                <div className="synchronize-container">
                    <h1 className="content">Parece que hiciste cambios en alguna pestaña o ventana del navegador</h1>
                    <h2 className="content">¿Quieres sincronizar tus TODO's?</h2>

                    <div className="synchronize-button-container">
                        <button
                            className="synchronize-button accept"
                            onClick={() => {
                                synchronizeTodos()
                                toggleShow()
                            }}
                            
                        >Yes!</button>
                        <button
                            className="synchronize-button cancel"
                            onClick={() => {
                                toggleShow()
                            }}
                            
                        >No</button>
                    </div>
                </div>
            </Modal>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }