import React from 'react';

const Album = ({album}) => {
    return (
        <div>
            <p><b>{album.id}</b> - {album.title}</p>
        </div>
    );
};

export {Album};