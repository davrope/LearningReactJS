import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import {connect} from 'react-redux';
import * as actions from './actions';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

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

                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);