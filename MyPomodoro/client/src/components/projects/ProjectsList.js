import React from 'react';
import { connect } from 'react-redux';

class ProjectsList extends React.Component{
    componentDidMount(){
        console.log("Here you need to fetch projects");
    };

    renderProjects(){
        return(
            <div>
                Render Projets List
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderProjects()}
            </div>
        );
    }
}



function mapStateToProps({ projects }) {
    return { projects };
  }
  
  export default connect(mapStateToProps, { fetchProjects })(ProjectsList);