import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    EDIT_TODO
  } from '../Actions/todo';
  
  const initialState = [];
  
  function todo(state=initialState, action) {
    switch(action.type) {
  
      case ADD_TODO:
        const todo = action.todo;
        return [...state, todo];
  
      case TOGGLE_TODO:
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {...todo, done: !todo.done };
            
          } else {
            return todo;
          }
        });
  
      case REMOVE_TODO:
        return state.filter((todo) => {
          return todo.id !== action.id;
        });
      
      case EDIT_TODO:
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {...todo, title: 'mudei', description: 'descrição mudada' }; 
          } else {
            return todo;
          }
        });
  
      default:
        return state;
    }
  }
  
  export default todo;