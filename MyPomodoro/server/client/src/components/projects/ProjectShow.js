import React from 'react';
import {connect} from 'react-redux';
import {fetchProject, fetchProjects} from '../../actions';
import axios from 'axios';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {project: {}}
    }
    
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchProjects();
        this.projectFetched = this.props.projects.find(e => e._id === id);

        this.setState({
            project: this.projectFetched
        })
        console.log(this.state)        
    }


    render(){
        if(!this.projectFetched){                                                                                                                    
            return <div>Loading...</div>
        }

        const {title, category, objective} = this.projectFetched;


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
            
            projects: Object.values(state.projects)
            
        };
}

export default connect(mapStateToProps, {fetchProjects})(ProjectShow);
