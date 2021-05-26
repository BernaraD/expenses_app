import React from 'react';
import "./Card.css"

function Card (props) {

//card style in card.css + any other className styles in any other components
    const classes = 'card ' + props.className;

    return (
        //children - value of children content between the opening and closing tags
        // in custom component (Expense Item)
        <div className={classes}>{props.children}</div>
    )
}

export default Card;