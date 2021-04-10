import _ from 'lodash';

import {DELETE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS} from '../actions/types';

const initialState = []

export default function foo(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    case FETCH_PROJECT:
      return action.payload; 
    case DELETE_PROJECT:
      return action.payload;  
      default:
        return {...state};
  }
}


// export default function  foo(state = initialState, action){
//   switch(action.type){
//     case FETCH_PROJECTS:
//       return{...state, ..._.mapKeys(action.payload, 'id')};
//     case FETCH_PROJECT:
//       return {...state, [action.payload.id]:action.payload};
//     case DELETE_PROJECT:
//       return {...state, [action.payload.id]: action.payload};
//     default:
//       return state;
//   }
// }