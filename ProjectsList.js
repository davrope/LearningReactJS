import React from 'react';
import { connect } from 'react-redux';
import {fetchProjects} from '../../actions';
import {Link} from 'react-router-dom';


class ProjectsList extends React.Component{
    componentDidMount(){
        this.props.fetchProjects();
    };

    renderProjects(){
        return this.props.projects.reverse().map(project=>{
            return(
                <div className = "ui segment" key = {project._id}>
                    <div className = "ui raised very padded text container segment">
                        <Link
                            to={`/projects/delete/${project._id}`}
                            
                        >
                            <i className = "trash icon" style = {{position:'absolute', top: '20px', right:'5px'}}></i>
                        </Link>
                        
                        <h2 className = "ui top attached header">{project.title} </h2>
                        <h3>{project.category}</h3>
                        <p>
                            {project.objective}
                        </p>
                        <p className="right">
                            Sent On: {new Date(project.dateSent).toLocaleDateString()}
                        </p>
                    </div>
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



function mapStateToProps({ projects }) {
    return { projects };
  }
  
  export default connect(mapStateToProps, { fetchProjects })(ProjectsList);