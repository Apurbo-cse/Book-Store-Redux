import { LOADED } from "./actionType";
import initialState from "./initialState";

const bookReducer = (state=initialState , action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;
    
        default:
            return state
    }
}

export default bookReducer;