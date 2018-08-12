export const EDIT_TODO = 'EDIT_TODO';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id: id
  };
}

export function editTodo(description, id) {
  return {
    type: EDIT_TODO,
    description: description,
    id: id
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  };
}
