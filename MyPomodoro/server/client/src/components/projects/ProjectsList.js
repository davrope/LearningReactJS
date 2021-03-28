import React from 'react';
import { connect } from 'react-redux';
import {fetchProjects} from '../../actions';

class ProjectsList extends React.Component{
    componentDidMount(){
        this.props.fetchProjects();
    };

    renderProjects(){
        return this.props.projects.reverse().map(project=>{
            return(
                <div className = "ui segment" key = {project._id}>
                    <div className = "ui inverted segment">
                        <span className = "ui basic segment">{project.title} </span>
                        <p>
                            {project.body}
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