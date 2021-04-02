import axios from 'axios';
// import history from '../history';
import {DELETE_PROJECT, FETCH_PROJECTS, FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const submitProject = (values, history) => async dispatch =>{
  const res = await axios.post('/api/projects', values);

  history.push('/');
  dispatch({type: FETCH_USER, payload: res.data})
};

export const fetchProjects =()=> async dispatch=>{
  const res = await axios.get('/api/projects');
  dispatch({type: FETCH_PROJECTS, payload:res.data});
};

// export const fetchProject = _id => async dispatch =>{
//   const response = await axios.get(`api/projects/${_id}`);

//   dispatch({ type: FETCH_PROJECT, payload: response.data });
// }


export const deleteProject = id => async dispatch =>{
  await axios.delete(`/api/projects/${id}`);

  dispatch ({type:DELETE_PROJECT, payload:id});

  // history.push('/');
}