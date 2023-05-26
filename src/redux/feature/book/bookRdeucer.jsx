import { LOADED } from "./actionType";

const initialState = {
    // define your initial state here
    // for example:
    books: [],
  };

const bookReducer = (state= initialState , action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;
    
        default:
            return state
    }
}

export default bookReducer;