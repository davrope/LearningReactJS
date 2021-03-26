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

    render() {
        return (
          <nav>
            <div className="nav-wrapper">
              <Link
                to={this.props.auth ? '/projects' : '/'}
                className="left brand-logo"
              >
                Lappital project manager
              </Link>
              <button className="ui right floated button" style={{ color: "red" }}>
                {this.renderContent()}
              </button>
            </div>
          </nav>
        );
      }
}


function mapStateToProps({ auth }) {
    return { auth };
  }
  
export default connect(mapStateToProps)(Header);