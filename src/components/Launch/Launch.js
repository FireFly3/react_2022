import React from 'react';

const Launch = (props) => {
    let {launch} = props;
    return (
        <div>
            <h2>{launch.mission_name}</h2>
            <div>{launch.launch_year}</div>
            <img src={launch.links.mission_patch_small} alt=""/>
        </div>
    );
};

export default Launch;