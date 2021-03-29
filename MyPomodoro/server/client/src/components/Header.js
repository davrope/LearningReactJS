import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends React.Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                    return (
                      <a className = "google log in" href = "/auth/google"> 
                        <i className = "google icon"></i>
                        Login with Google
                      </a>
                      );
            default:
                return[
                    <a className = "sign-out" href = "/api/logout"> <i className = "sign-out icon"></i>Logout</a>
                ];
        }
    }



    render() {
        return (
          <nav>
            <div className = "ui attached stackable menu">
              <div className = "ui container">
                <a className = "item" href= "/">
                  <i className = "home icon"></i>
                  Home
                </a>
                <a className = "item" href= {this.props.auth ? '/projects' : '/'}>
                  <i className = "archive icon"></i>
                  Projects
                </a>

                <div className = "right item">
                  <div>
                    <a className = "ui button" href = "/projects/new" style = {{color:'white', backgroundColor: '#21ADA8'}}>
                      <i className = "add icon"></i>
                      New Project
                    </a>
                  </div>

                  

                  <button className="ui right floated button">
                      {this.renderContent()}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        );
      }
}


function mapStateToProps({ auth }) {
    return { auth };
  }
  
export default connect(mapStateToProps)(Header);