import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div class="cardBody">
            <h1 class="title">{props.title}</h1>
            <button onClick={() => {props.petAnimal(props.title)}}>Pet {props.title}</button>
        </div>
    )
}

export default Card;