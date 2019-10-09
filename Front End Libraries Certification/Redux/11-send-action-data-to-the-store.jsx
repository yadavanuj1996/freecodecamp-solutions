const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line
    case ADD_NOTE: return action.text;
    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line
  return {type: ADD_NOTE,text: note};
  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(JSON.stringify(store.getState()));