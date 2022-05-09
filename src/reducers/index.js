import counterReducer from './counter';
import loggedReducer from './isLogged'; 
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer, //or you can do below by ES6
    // counterReducer
    isLogged: loggedReducer
})

export default allReducers