import React from 'react';
import {connect} from 'react-redux';

// sampleHOC(MyComponent) => SuperMyComponent
// sampleHOC({...})(MyComponent) => SuperMyComponent

// props => {myMessage: 'message from state'}
const GetMessage = (props) => {
    return (
        <h1 className={'alert alert-' + props.type}>{props.myMessage}</h1>
    )
}

export default connect(
    (state) => {
        return {
            myMessage : state.messaging.message,
            type: state.messaging.typeMessage
        }
    }

)(GetMessage);