import { FETCH_TODOS } from "../actions/types"

const todo = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todo_id: action.todo_id,
          text: action.text,
          completed: false
        }
      case 'TOGGLE_TODO':
        if (state.todo_id !== action.todo_id) {
          return state
        }
  
        return Object.assign({}, state, {
          completed: !state.completed
        })
  
      default:
        return state
    }
  }
  
  const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          todo(undefined, action)
        ]
      case 'TOGGLE_TODO':
        return state.map(t =>
          todo(t, action)
        )
      case FETCH_TODOS:
        return [...action.payload]
      default:
        return state
    }
  }
  
  export default todos