import React from 'react';
import { connect } from 'react-redux';
import {fetchProjects} from '../../actions';

class ProjectsList extends React.Component{
    componentDidMount(){
        this.props.fetchProjects();
    };

    renderProjects(){
        return(
            <div>
                Render Projects List
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