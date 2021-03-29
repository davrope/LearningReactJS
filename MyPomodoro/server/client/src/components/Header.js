import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends React.Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                    return <li><a className = "google log in" href = "/auth/google"> <i className = "google"></i>Login with Google</a></li>
            default:
                return[
                    <li key = "2"><a className = "sign-out" href = "/api/logout"> <i className = "sign-out"></i>Logout</a></li>
                ];
        }
    }

    centeredMenu(){
      <div className = "ui attached stackable menu">
        <div className = "ui container">
          <a className = "item" href= "/">
            <i className = "home icon"></i>
            Home
          </a>
        
          <Link
              to={this.props.auth ? '/projects' : '/'}
              className="clipboard"
            >
              Projects
            </Link>
          
          <div className = "item">
            <button className="ui right floated button">
                {this.renderContent()}
            </button>
          </div>

        </div>
      </div>
    }

    render() {
        return (
          <nav>
            {/* <div className="nav-wrapper">
              <Link
                to={this.props.auth ? '/projects' : '/'}
                className="left brand-logo"
              >
                Lappital project manager
              </Link>
              <button className="ui right floated button" style={{ color: "red" }}>
                {this.renderContent()}
              </button>
            </div> */}
            
            <div className = "ui attached stackable menu">
              <div className = "ui container">
                <a className = "item" href= "/">
                  <i className = "home icon"></i>
                  Home
                </a>
              
                <Link
                    to={this.props.auth ? '/projects' : '/'}
                    className="archive link"
                  >
                  <i className = "archive icon">Projects</i>
                    
                </Link>
                
                <div className = " right item">
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