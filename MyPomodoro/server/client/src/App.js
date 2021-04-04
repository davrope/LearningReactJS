import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import {connect} from 'react-redux';
import * as actions from './actions';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProjectNew from './components/projects/ProjectNew';
import ProjectDelete from './components/projects/ProjectDelete'

import history from './history';

class App extends React.Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <Router history = {history}>
                    <div className= "container">
                        <Header/>
                        <Switch>
                            <Route exact path = "/" component = {Landing}/>
                            <Route exact path = "/projects" component = {Dashboard} />
                            <Route path = "/projects/new" component={ProjectNew}/>
                            <Route path = "/projects/delete/:id" exact component = {ProjectDelete}/>
                        </Switch>                      
                    </div> 
                </Router>
            </div>
            
        );
    }
}

export default connect(null, actions)(App);