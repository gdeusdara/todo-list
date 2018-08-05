export const EDIT_TODO = 'EDIT_TODO'; // action
export const ADD_TODO = 'ADD_TODO'; // action
export const REMOVE_TODO = 'REMOVE_TODO'; // action
export const TOGGLE_TODO = 'TOGGLE_TODO'; // action

let id = 0;

export function addTodo(todo) { // action creator
  id++;
  todo.id = id;
  return {
    type: ADD_TODO,
    todo: todo
  };
}

export function removeTodo(id) { // action creator
  return {
    type: REMOVE_TODO,
    id: id
  };
}

export function editTodo(title, description, id) { // action creator
  return {
    type: EDIT_TODO,
    title: title,
    description: description,
    id: id    
  };
}

export function toggleTodo(id) { // action creator
  return {
    type: TOGGLE_TODO,
    id: id
  };
}
