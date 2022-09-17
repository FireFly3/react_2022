import React, {useEffect, useState} from 'react';

import {getLaunchAxios} from "../services/launch.api.axios.servise";
import Launch from "../Launch/Launch";

const Launches = () => {

    let [launches, setLaunches] = useState([])

    useEffect(() => {
        getLaunchAxios().then(value => setLaunches(value.data.filter(year => year.launch_year != '2020')))

    }, [])

    return (
        <div>
            {launches.map((launch, index) => (<Launch launch={launch} key={index}/>))}
        </div>
    );
};

export default Launches;