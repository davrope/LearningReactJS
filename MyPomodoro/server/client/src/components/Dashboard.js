import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsList from './projects/ProjectsList';
// import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <ProjectsList />
    </div>

  );
};

export default Dashboard;