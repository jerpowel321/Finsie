import React from 'react';

const Cards = (props) => {
    return (
        <div className="card text-left hvr-grow ">
            <div className="card-body">
                <h5 className="card-title navy-text ">{props.title}</h5>
                <p className="card-text grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <i className={`text-warning ${props.icon}`}></i>
            </div>
        </div>
    )
}

export default Cards