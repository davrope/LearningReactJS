import axios from 'axios';
import history from '../history';
import {DELETE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS, FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const submitProject = (values) => async dispatch =>{
  const res = await axios.post('/api/projects', values);

  
  dispatch({type: FETCH_USER, payload: res.data});
  history.push('/');

};

export const fetchProjects =()=> async dispatch=>{
  const res = await axios.get('/api/projects');
  dispatch({type: FETCH_PROJECTS, payload:res.data});
};

export const deleteProject = id => async dispatch =>{
  await axios.delete(`/api/projects/${id}`);

  dispatch ({type:DELETE_PROJECT, payload:id});
  
  history.push('/');
  history.push('/projects');
};

export const fetchProject = (id) => async dispatch =>{
  const res = await axios.get(`/api/projects/${id}`);
  
  dispatch({type: FETCH_PROJECT, payload:res.data});

};

//Todos reducers:


let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

