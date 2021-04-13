import React from 'react';
import './button.scss';

export default function Button(props) {
    return (
        <div>
            <button className="generalButton" onClick={props.onClick}>{props.name}</button>
        </div>
    )
}
