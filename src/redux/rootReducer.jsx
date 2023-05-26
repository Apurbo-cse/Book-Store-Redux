import { combineReducers } from "redux";
import bookReducer from './feature/book/reducer';

const rootReducer = combineReducers({
   books: bookReducer,
})

export default rootReducer;