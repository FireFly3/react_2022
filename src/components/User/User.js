import React from 'react';
import {Link} from "react-router-dom";

const User = (props) => {
    let {item: user} = props;
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <p>{user.address.city} <br/>{user.email}</p>
            <div>
                <Link to={'/users/' + user.id} state={{...user}}>User Details</Link>
            </div>
            <div><Link to={'/users/v2/'+user.id}>User details v2</Link></div>
            <hr/>
        </div>
    );
};

export default User;