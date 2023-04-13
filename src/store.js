import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
    //this contains all the reducers managing different state slices
})

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store ;