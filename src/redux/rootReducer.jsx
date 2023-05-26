import { combineReducers } from "redux";

import bookReducer from './reducer'

const rootReducer = combineReducers({
   books: bookReducer,
})

export default rootReducer;