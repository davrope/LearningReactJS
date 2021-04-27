import React from 'react';
import { connect } from 'react-redux';
import {fetchProjects} from '../../actions';
import {Link} from 'react-router-dom';


class ProjectsList extends React.Component{
    componentDidMount(){
        this.props.fetchProjects();
        
    };
// ui segment
    renderProjects(){
        
        return this.props.projects.reverse().map(project=>{
            return(
                <div className = "ui raised very padded text container segment" key = {project._id}>
                    {/* <div className = "ui raised very padded text container segment"> */}
                        <Link
                            to={`/projects/delete/${project._id}`}
                            
                        >
                            <i className = "trash icon" style = {{position:'absolute', top: '20px', right:'5px'}}></i>
                        </Link>
                        
                        <Link to to={`/projects/${project._id}`}>
                            <h2 className = "ui top attached header">{project.title} </h2>
                        </Link>
                        
                        <h3>{project.category}</h3>
                        <p>
                            {project.objective}
                        </p>
                        <p className="right">
                            Sent On: {new Date(project.dateCreated).toLocaleDateString()}
                        </p>
                    {/* </div> */}
                </div>
            );
        })
    }

    render(){
        return(
            <div>
                {this.renderProjects()}
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return{
        projects: Object.values(state.projects)
    };
};

export default connect(mapStateToProps, {fetchProjects})(ProjectsList);