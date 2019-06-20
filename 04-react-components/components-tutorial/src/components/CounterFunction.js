import React, {useState, useEffect} from 'react';

export default function CounterFunction(props) {
    // anti pattern
    const [countdown, setCountdown] = useState(props.number);

    // compojentDidMount, componentDidUpdate, componentWillUnmount
    useEffect(() => {
        // compojentDidMount, componentDidUpdate

        const intervalId = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    })

    useEffect(() => {
        if (countdown === 0) {
            props.cb()
        }
    });

    // componentDidMount
    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [countdown]);

    return (
        <h1>{countdown}</h1>
    )
}