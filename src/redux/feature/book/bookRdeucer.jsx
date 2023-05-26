import { ADDED, LOADED, UPDATED } from "./actionType";
import initialState from "./initialState";

const nextBookId = (books) => {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
    return maxId + 1;
}

const bookReducer = (state=initialState , action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;

        case ADDED:
            return [
                ...state, 
                {
                    id: nextBookId(state),
                    name: action.payload,
                    author: action.payload,
                    img_url: action.payload,
                    price: action.payload,
                    rating: action.payload,
                    featured: action.payload
                }
            ]
        case UPDATED:
            return state.map(book => {
                if(book.id !== action.payload){
                    return book
                }
                return {
                    ...book,
                    update: !book.update
                }
                })
    
        default:
            return state
    }
}

export default bookReducer;