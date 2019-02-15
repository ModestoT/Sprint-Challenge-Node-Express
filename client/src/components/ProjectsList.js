import React from 'react';
import { Link } from 'react-router-dom';

import Project from './Project';

const ProjectList = props => {
    return(
        <div className="projects-list-wrapper">
            {props.projects.map(project => {
               return <Link to = {`/projects/${project.id}`} key={project.id}><Project project={project} /></Link>
            })}
        </div>
    );
};

export default ProjectList;