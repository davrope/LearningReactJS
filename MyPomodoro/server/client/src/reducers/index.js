import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as reduxForm} from 'redux-form';
import projectsReducer from './projectsReducer';
import timeReducer from './timeReducer';
import todos from './todos';
import visibilityFilter from './visibilityFilter'


// import todos from './todos';
// import visibilityFilter from './visibilityFilter';
    

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    projects: projectsReducer,
    timeReducer,
    todos,
    visibilityFilter
});