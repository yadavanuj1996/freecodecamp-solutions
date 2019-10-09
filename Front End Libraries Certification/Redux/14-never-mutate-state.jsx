const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO: 
      return [...state,action.data];
    // sol2 return state.concat(action.data);
    // sol3 return (`${state.join(',')},${action.data}`).split(',');
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    data: todo
  }
}

const store = Redux.createStore(immutableReducer);
