import React from 'react';
import {connect} from 'react-redux';
import {fetchProject, saveTime, fetchTodos} from '../../actions';
import {withRouter} from 'react-router';
import Timer from '../Timer';
import TodoApp from '../../todos/todosComponents/TodoApp';
import _ from 'lodash';
import ms  from 'pretty-ms';
// import TotalTime from '../TotalTime';



class ProjectShow extends React.Component{
    
    async componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchProject(id);
        this.helper();
        this.totalTime();
        

    }

    async helper(){ 
        // setTimeout will help the fetchTodos action to fetch the information and pass it to redux state.
        // setTimeout will help the fetchTodos action to fetch the information and pass it to redux state.
        setTimeout(() => {
            this.props.fetchTodos(this.props.projects.todos);
        }, 1300);
        // const myTodos = await this.props.projects;
        // const myTime = await this.props.timeReducer;
        // const {id} = await this.props.match.params;

        setInterval(() => {
            this.props.saveTime(this.props.match.params.id, this.props.timeReducer, this.props.todos)
        }, 30000);
    }

    totalTime(){

        try {
            const timeArray = (this.props.projects.time);

            const myTotalTimeArray = timeArray.map(function(timeArray){
                return timeArray.time
            })
    
            const myTotalTime = _.sum(myTotalTimeArray);
    
            // console.log(timeArray[0].time);
    
            return myTotalTime/60000;
          }
          catch(err) {
            console.log("Ops, something went wrong :(");
          }


    }

    



    render(){
        if(!this.props.projects){                                                                                                                    
            return <div>Loading...</div>
        }
        const {title, category, objective} = this.props.projects;
        
        

        return(
            <div>
                {this.updateReduxStateWithTodos}
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
                    <TodoApp/>
                </div>

                <div className="ui raised very padded text container segment">
                    <Timer/>
                    <p>
                        Your time in this project: {Math.round(this.totalTime())} minutes
                    </p>

                </div>

                <button className = "ui button" onClick = {()=>console.log(this.props.match.params.id, this.props.timeReducer, this.props.todos)}>
                    Test Save project
                </button>

                <button className = "ui button" onClick = {()=>this.props.saveTime(this.props.match.params.id, this.props.timeReducer, this.props.todos)}>
                    Save project
                </button>

                <button className = "ui button" onClick = {()=>(this.totalTime())}>
                    Test Total Time
                </button>

            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
            projects: (state.projects),
            timeReducer: state.timeReducer,
            todos: (state.todos)        
        };
}

export default connect(mapStateToProps, {fetchProject, saveTime, fetchTodos})(withRouter(ProjectShow));


