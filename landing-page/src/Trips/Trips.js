import React from 'react';

const trips = (props) => {
    return(
        <div className="trips">
            <h2 className="trip-name">Trip name: {props.name}</h2>
            <p className="trip-length">Trip length: {props.length}</p>
            <p className="trip-price">Trip price: {props.price}</p>
            <button>Buy now</button>
        </div>
    )
}

export default trips;