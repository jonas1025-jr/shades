import React from 'react'
import './Card.css';

const Card = ({ Icon, title, description }) => {
    return(
        <div className="card">
            <Icon />
            <div className='card__info'>
                <h2>{title}</h2>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default Card