import React from "react";
import '../styles/Rating.css'


// Adapted from https://webdesign.tutsplus.com/a-simple-javascript-technique-for-filling-star-ratings--cms-29450t
export const Rating = ({rating, className}) => {

    const percentage = String(rating * 100 / 5) + '%';

    // Se utiliza un estilo inline porque el atributo depende directamente del valor de una variable,
    // Se podrían haber definido distintas clases, pero esta alternativa me pareció más elegante a pesar
    // de tratarse de una mala práctica
    return (
        <div className={className}>
            <div className="rating__stars">
                <div className="stars__inner" style={{width: percentage}}></div>
            </div>
            <span className='rating__span'> ({rating}/5.0)</span>
        </div>
    );
}