import types from '../actions/types';

const DEFAULT_STATE = { all: [] }

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ALL:
            console.log("GET ALL: ", action.payload)
            return {all: action.payload.data.todos}
        // case types.ADD_TODO:
        //     // return {all: [action.payload, ...state.all]};
        //     console.log("ADD_TODO: ", action.payload)
        //     return state;       
        default: 
            return state;
    }
}