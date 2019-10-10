// define ADD, addMessage(), messageReducer(), and store here:
const ADD='ADD';

const addMessage=(message)=>{
    return {
        type: 'ADD',
        message: message
    };
}

const messageReducer=(state=[],action)=>{
    if(action.type===ADD){
        let updatedMessages=[...state,action.message];
        return updatedMessages;
    }
    else{
        return state;        
    }
};

const store=Redux.createStore(messageReducer);
