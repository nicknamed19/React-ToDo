import React from "react";

function EmptySearchedTodos({ searchText }) {
    return(
        <p>No se encontraron resultados de <strong>{searchText}</strong></p>
    )
}

export { EmptySearchedTodos }