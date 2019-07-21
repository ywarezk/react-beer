// {type: 'SET_MESSAGE', payload: 'new message'}

export const SET_MESSAGE = '[messaging] SET_MESSAGE'
export const SET_SEARCH = '[messaging] SET_SEARCH';

export function setMessage(newMessage) {
    return {
        type: SET_MESSAGE, 
        payload: newMessage
    }
}

// store.dispatch({type: '' ... })
// store.dispatch(setMessage('new message'))