import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends React.Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                    return <li><a href = "/auth/google">Login with Google</a></li>
            default:
                return[
                    <li key = "2"><a href = "/api/logout">Logout</a></li>
                ];
        }
    }

    render(){
        return(
            <div className = "ui secondary pointing menu">
                <button>
                    Home
                </button>

                <div className = "right menu">
                    {this.renderContent()}
                </div>


            </div>
        );
    }
}


export default Header;


// Use mapStatetoProps function with auth
// use export connect,
// Replace button tag with link to