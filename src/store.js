import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TodoReducer } from "./reducers/TodoReducers";

const reducer = combineReducers({
    //this contains all the reducers managing different state slices
    Todo: TodoReducer,
})

const initialState = {};

const middleware = [thunk];

// holds the complete state tree of your app. 
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store ;