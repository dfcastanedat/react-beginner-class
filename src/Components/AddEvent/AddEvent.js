import React from 'react'
import './AddEvent.css'

export default function AddEvent(props) {
    return (
        <div className="form-container">
            <h3>Añadir evento</h3>
            <input onChange={props.handleNameChange} placeholder="Nombre"/>
            <input onChange={props.handleEventChange} placeholder="Evento"/>
            <input onChange={props.handleAboutChange} placeholder="Detalles del evento"/>
            <button onClick={props.handleSubmit}>Añadir</button>
        </div>
    )
}
