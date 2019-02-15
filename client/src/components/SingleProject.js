import React from 'react';
import axios from 'axios';


class SingleUser extends React.Component {
    state = {
        project: ''
    };

    componentDidMount(){
        const project = this.props.projects.find(project => `${project.id}` === this.props.match.params.id);
        
        axios
            .get(`http://localhost:4000/api/projects/${project.id}`)
            .then(res => {
                this.setState({ project: res.data });
            })
            .catch(err => console.log(err))
    }
    render(){
        if(!this.state.project) return <h1>Opps!</h1>;
        return(
            <div className="single-project-wrapper">
                <h1>{this.state.project.name}</h1>
                {this.state.project.actions.map(action => {
                    return (
                        <div className="actions">
                            <h2>Action</h2>
                            <p>description: {action.description}</p>
                            <p>notes: {action.notes}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default SingleUser;