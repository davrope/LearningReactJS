import React from 'react';
import {connect} from 'react-redux';
import {fetchProject, fetchProjects} from '../../actions';
import axios from 'axios';

class ProjectShow extends React.Component{
    
    componentDidMount(){
        
        
        // const project = this.props.fetchProject(id);

        const {id} = this.props.match.params;
        this.props.fetchProjects();
        this.props.fetchProject(id);
        


        const ProjectFetched = this.props.projects.find(e => e._id === id);
        console.log(ProjectFetched);

        console.log(this.props.projects);

        console.log(this.props.match.params.id);

        console.log(this.props.project);
        console.log(this.props.fetchProject(id));

        
    }


    render(){


        if(!this.props.project){                                                                                                                    
            return <div>Loading...</div>
        }

        const {title, category, objective} = this.props.project;


        return(
            <div>
                <h1>{title}</h1>;
                <h2>{category}</h2>;
                <p>{objective}</p>;
            </div>
                
        );

    }
}

// const mapStateToProps = ({projects}, ownProps) =>{
//     return {project: projects[ownProps.match.params.id]}
     
// };

// const mapStateToProps = (state, ownProps) =>{
//     return {project: state.projects[ownProps.match.params.id]};
// }

const mapStateToProps = (state, ownProps)=>{
    return {
            project : state.projects[ownProps.match.params.id],
            projects: Object.values(state.projects),
            
        };
}

export default connect(mapStateToProps, {fetchProject, fetchProjects})(ProjectShow);
