const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        return [...state.slice(0,action.data),...state.slice(action.data+1)]; 
  
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      data:index
    }
  }
  
  const store = Redux.createStore(immutableReducer);
  