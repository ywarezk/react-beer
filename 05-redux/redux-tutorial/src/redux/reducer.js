import {SET_MESSAGE} from './actions';

const initialState = {
    message: 'message from state',
    typeMessage: 'warning'
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_MESSAGE:
            // state['message'] = action.payload; // Wrong!
            return {...state, message: action.payload};
        default:
            return state;
    }
}