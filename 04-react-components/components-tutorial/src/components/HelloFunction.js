import React, {useState, useEffect} from 'react';

// props => {message: "..."}
// this = undefined
// this.state // error
export default function HelloFunction(props) {
    // isShow
    // [isShow, setIsShow]
    // const stateArray = useState(true)
    // const isShow = stateArray[0];
    // const setIsShow = stateArray[1];

    const [isShow, setIsShow] = useState(true)
    // setIsShow(false)

    
    const anotherArray = useState({
        isShow: true,
        message: "sdfsdf" 
    });
    const complexState = anotherArray[0];
    const setComplexState = anotherArray[1];
    // setComplexState({isShow: false, message: 'sdfsdf'})


    const toggleVisibility = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <h1>hello from function component </h1>
            {
                isShow && (
                    <h3>
                        {props.message}
                    </h3>
                )
            }
            
            <button onClick={toggleVisibility}>toggle visibility</button>
        </div>

        
    )
}

// HelloFunction.propTypes = {

// }