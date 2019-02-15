import React from 'react';


const project = props => {
    return(
        <div className="project-wrapper">
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
        </div>
    );
};

export default project;