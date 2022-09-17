import React from 'react';

const User = (props) => {
    let{item:user, lift}=props;
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <p>{user.address.city} <br/>{user.email}</p>
            <button onClick={()=>{
                lift(user)
            }}>details</button>
        </div>
    );
};

export default User;