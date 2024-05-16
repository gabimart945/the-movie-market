import React from "react";
import '../styles/Rating.css'
export const Rating = ({rating, className}) => {

    const percentage = String(rating * 100 / 5) + '%';

    return (
        <div className={className}>
            <div className="stars-outer">
                <div className="stars-inner" style={{width: percentage}}></div>
            </div>
            <span className='rating__span'> ({rating}/5.0)</span>
        </div>
    );
}