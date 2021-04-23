import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions';

let AddTodo = ({ dispatch }) => {
    let input
  
    return (
      <div>
        <form 
          className = "ui action input"
          onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }}
          placeholder = "New Task" 
          />
          <button type="submit" className = "ui icon button">
            <i className = "plus icon"></i>
          </button>
        </form>
      </div>
    )
  }
  AddTodo = connect()(AddTodo)
  
  export default AddTodo