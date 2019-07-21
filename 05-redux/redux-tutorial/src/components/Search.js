import React from 'react';
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {setSearch, fetchTasks} from '../redux/actions/todo.actions';

const Search = ({setSearch, fetchTasks}) => {
    const handleSubmit = (values) => {
        console.log(values);
        setSearch(values.search);
        fetchTasks(values.search);
    }

    return (
        <Formik
            initialValues={ {search: ''} }
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="form-group">
                    <label>Search</label>
                    <Field type="search" name="search" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                        submit
                    </button>
                </div>
            </Form>
        </Formik>
    )
}

export default connect(
    null,
    {
        setSearch,
        fetchTasks
    }
)(Search)