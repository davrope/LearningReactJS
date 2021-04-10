import React from 'react';
import {connect} from 'react-redux';
import {fetchProject} from '../../actions';
import {withRouter} from 'react-router';


class ProjectShow extends React.Component{
    
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchProject(id);
    }


    render(){
        if(!this.props.projects){                                                                                                                    
            return <div>Loading...</div>
        }
        const {title, category, objective, dateCreated} = this.props.projects;

        return(
            <div>
                <h1>{title}</h1>
                <h2>{category}</h2>
                <p>{objective}</p>
                <h1>This was created on this date: {new Date(this.props.projects.dateCreated).toLocaleString()} </h1>
                
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
            projects: (state.projects)        
        };
}

export default connect(mapStateToProps, {fetchProject})(withRouter(ProjectShow));


