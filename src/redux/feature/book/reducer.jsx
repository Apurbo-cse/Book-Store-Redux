import { LOADED } from "./actionType";



const reducer = (state , action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;
    
        default:
            return state
    }
}

export default reducer;