import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsList from './projects/ProjectsList';
// import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <ProjectsList />
      <div className="fixed-action-btn">
        <Link to="/projects/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;