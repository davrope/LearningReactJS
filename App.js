import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import {connect} from 'react-redux';
import * as actions from './actions';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProjectNew from './components/projects/ProjectNew';
import ProjectDelete from './components/projects/ProjectDelete'

class App extends React.Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <BrowserRouter>
                <div className= "container">
                    <Header/>
                    <Route exact path = "/" component = {Landing}/>
                    <Route exact path = "/projects" component = {Dashboard} />
                    <Route path = "/projects/new" component={ProjectNew}/>
                    <Route path = "/projects/delete/:id" exact component = {ProjectDelete}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);