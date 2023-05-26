import { LOADED } from "./actionType";


const bookReducer = (state , action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;
    
        default:
            return state
    }
}

export default bookReducer;