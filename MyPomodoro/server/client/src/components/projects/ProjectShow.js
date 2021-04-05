import React from 'react';
import {connect} from 'react-redux';
import {fetchProject} from '../../actions';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchProject(id);
        console.log(id);


        console.log(this.props.project);
    }

    render(){

        if(!this.props.project){
            return <div>Loading...</div>
        }

        const {title, category, objective} = this.props.project


        return(
            <div>
                <h1>{title}</h1>;
                <h2>{category}</h2>;
                <p>{objective}</p>;
            </div>
                
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {project: state.projects[ownProps.match.params.id]}
};



export default connect(mapStateToProps, {fetchProject})(ProjectShow);