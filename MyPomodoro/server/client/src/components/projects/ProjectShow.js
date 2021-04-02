import React from 'react';
import { connect } from 'react-redux';

class ProjectShow extends React.Component{
    componentDidMount(){
        const {id} = this.props.match.params;

        this.props.fetchProject(id);


    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }

        const {title} =  this.props.project;

        return(
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {project:state.projects[ownProps.match.params.id]};
}

export default connect(
    mapStateToProps,
    {fetchProject}
)(ProjectShow);