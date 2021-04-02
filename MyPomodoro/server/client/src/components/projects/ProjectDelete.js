import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';

import {deleteProject} from '../../actions';

class ProjectDelete extends React.Component{
    componentDidMount(){
        // this.props.fetchProject(this.props.match.id);
        console.log(this.props.match.id)
    }

    // this.props.matchs.params.id)
    renderActions(){
        const {id} = this.props.match.params;

        return(
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteProject(id)}
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/projects" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent(){
        if(!this.props.project){
            return 'Are you sure you want to delete this project?';
        }
        
        return `Are you sure you want to delete the project with title: ${this.props.project.title}`
    };

    render(){
        return(
            <Modal
                title ="Delete project"
                content = {this.renderContent()}
                actions = {this.renderActions()}
                onDismiss = {()=>history.push('/projects')}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) =>{
    return{project: state.projects[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {deleteProject})(ProjectDelete);
