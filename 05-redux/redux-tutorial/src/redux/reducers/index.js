import {combineReducers} from 'redux';
import messageReducer from './message.reducer';
import todoReducer from './todo.reducer';

export default combineReducers({
    messaging: messageReducer,
    todo: todoReducer
});