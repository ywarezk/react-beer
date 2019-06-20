/**
 * get a number in the props
 * countdown to zero
 * remove component
 */

 import React from 'react';
 import PropTypes from 'prop-types';

 export default class CounterClass extends React.Component {
    // state = {
    //     countdown: this.p
    // }

    constructor (props) {
        super(props)

        // anti pattern
        this.state = {
            countdown : props.number
        }

        // not in constructor
        // setInterval(() => {
        //     this.setState((prevState) => {
        //         return {
        //             countdown: prevState.countdown - 1
        //         }
        //     })
        // }, 1000)
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            console.log('timer is running');
            this.setState((prevState) => {
                return {
                    countdown: prevState.countdown - 1
                }
            })
        }, 1000);
        console.log(this.intervalId);
    }

    static propTypes = {
        number : PropTypes.number,
        cb : PropTypes.func.isRequired
    }

    static defaultProps = {
        number : 10
    }

    render() {
         return (
             <h1>{this.state.countdown}</h1>
         )
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdown === 0) {
            this.props.cb();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
 }