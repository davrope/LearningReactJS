import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';

class App extends React.Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <BrowserRouter>
                <div className= "container">
                    <Header/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;