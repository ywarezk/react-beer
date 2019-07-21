import {SET_SEARCH, SET_TASKS} from '../actions/todo.actions';

const initialState = {
    searchString: '',
    tasks: []
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SEARCH:
            return {...state, searchString: action.payload};
        case SET_TASKS: 
            return {...state, tasks: action.payload};
        default:
            return state;
    }
}