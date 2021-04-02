// import _ from 'lodash';
import {DELETE_PROJECT, FETCH_PROJECTS, FETCH_PROJECT} from '../actions/types';

export default function foo(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
    case DELETE_PROJECT:
      return action.payload;
    // case FETCH_PROJECT:
    //   return action.payload.id;
  }
}
