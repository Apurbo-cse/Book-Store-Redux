import { combineReducers } from "redux";
import bookReducer from './feature/book/bookRdeucer';
const rootReducer = combineReducers({
   books: bookReducer,
})

export default rootReducer;