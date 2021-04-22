import React from 'react';
import {connect} from 'react-redux';
import {fetchProject, saveTime} from '../../actions';
import {withRouter} from 'react-router';
import Timer from '../Timer';



class ProjectShow extends React.Component{
    
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchProject(id);

    }


    render(){
        if(!this.props.projects){                                                                                                                    
            return <div>Loading...</div>
        }
        const {title, category, objective} = this.props.projects;

        // const {id} = this.props.match.params;
        // const time = this.props.timeReducer;
        // this.props.saveTime(id, time)

        // const {todos} = this.props;
        // const {id} = this.props.match.params;
        // const {time} = this.props.timeReducer

        return(
            <div>
                <div className="ui raised very padded text container segment">
                    <h1 className="ui header">{title}</h1>
                    <div className = "metadata"></div>
                    <div className = "date">Created on: {new Date(this.props.projects.dateCreated).toLocaleString()}</div>
                    <h4>
                    Category: {category}
                    </h4>
                    <h4>Objective:</h4>
                    <p>{objective}</p>
                </div>

                <div className="ui raised very padded text container segment">
                    <Timer/>
                </div>

                <button className = "ui button" onClick = {()=>console.log(this.props.match.params.id, this.props.timeReducer)}>
                    Test Save project
                </button>

                <button className = "ui button" onClick = {()=>this.props.saveTime(this.props.match.params.id, this.props.timeReducer)}>
                    Save project
                </button>

                
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
            projects: (state.projects),
            timeReducer: state.timeReducer
            // todos: (state.todos)        
        };
}

export default connect(mapStateToProps, {fetchProject, saveTime})(withRouter(ProjectShow));


