import React from 'react'
import './Event.css'

export default function Event(props) {
    return (
        <div className="event-container">
            <div className="event-info">
                <span className="event-info-text">{props.event.name}</span>
                <span className="event-info-text">{props.event.created_at}</span>
            </div>
            <div className="event-details">
                <span className="event-details-text title">{props.event.event}</span>
                <span className="event-details-text">{props.event.about}</span>
            </div>
        </div>
    )
}


