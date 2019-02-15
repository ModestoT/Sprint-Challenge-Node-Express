import React from 'react';

const project = props => {
    return(
        <div>
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
        </div>
    );
};

export default project;