import {createStore, applyMiddleware} from 'redux';
import combinedReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';




export default createStore(
    combinedReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)