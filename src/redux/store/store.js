import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducer/movieReducer";
// thunk => The thing that compensates(يعوض) me for the async, await.
import thunk from "redux-thunk";

// 1. Create Store
export const store = createStore(moviesReducer, applyMiddleware(thunk));
