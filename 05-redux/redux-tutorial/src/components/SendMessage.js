import React from 'react';
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {setMessage} from '../redux/actions';

// props => {mySetMessage : store.dispatch(setMessage(''))}
// props.mySetMessage('new message') => store.dispatch(setMessage('new message'))
const SendMessage = (props) => {
    const handleSendMessage = (values) => {
        console.log(values);
        props.mySetMessage(values.message);
    }

    return (
        <Formik
            initialValues={ {message: ''} }
            onSubmit={handleSendMessage}
        >
            <Form>
                <div className="form-group">
                    <label>Send Message</label>
                    <Field 
                        className="form-control"
                        type="text" 
                        name="message" />
                </div>
                <div className="form-group">
                    <button 
                        className="btn btn-primary"
                        type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default connect(
    null,
    {
        mySetMessage: setMessage 
    }
)(SendMessage);