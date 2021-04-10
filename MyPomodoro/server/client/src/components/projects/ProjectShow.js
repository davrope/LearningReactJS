import React from 'react';
import {connect} from 'react-redux';
import {fetchProject} from '../../actions';
import {withRouter} from 'react-router';


class ProjectShow extends React.Component{
    
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchProject(id);  
        console.log(this.props.projects)
    }


    render(){
        if(!this.props.projects){                                                                                                                    
            return <div>Loading...</div>
        }
        const {title, category, objective} = this.props.projects;

        return(
            <div>
                <h1>{title}</h1>
                <h2>{category}</h2>
                <p>{objective}</p>
                
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


