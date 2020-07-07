import React from 'react';

const trips = (props) => {
    return(
        <div>
            <h2>Trip name: {props.name}</h2>
            <p>Trip length: {props.length}</p>
            <p>Trip price: {props.price}</p>
            <button>Buy now</button>
        </div>
    )
}

export default trips;