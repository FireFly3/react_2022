import React from 'react';

function Simpson(props) {
    let {item} = props
    return (
        <div>
            <h2>{item.name} - {item.surname}</h2>
            <p>Age: {item.age} <br/>Info: {item.info}</p>
            <img src={item.photo} alt={item.name}/>
        </div>
    );
}

export default Simpson;