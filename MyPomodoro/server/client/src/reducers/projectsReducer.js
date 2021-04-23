import {DELETE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS, SAVE_TIME} from '../actions/types';

const initialState = []

export default function foo(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    case FETCH_PROJECT:
      return action.payload; 
    case DELETE_PROJECT:
      return action.payload;
    case SAVE_TIME:
      return action.payload;
      default:
        return {...state};
    
  }
}
