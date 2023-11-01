import React from "react";
import '../styles/LoadingTodos.css'

function LoadingTodos() {
    return(
        <div id="contenedor">
            <div className="loader" id="loader"></div>
        </div>
    )
};

export { LoadingTodos };