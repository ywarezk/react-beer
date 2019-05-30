// what can we do with jsx???

// import HelloWorld from './stam-component';
// import React from 'react';

const div = <h1>hello world</h1>
// const div = <H1>hello world</H1> // Error

function helloWorld() {
    return (
        <span>hello im a component</span>
    )
}

const H1 = helloWorld;

const div1 = <H1></H1>

// jsx has to be wrapped with a single element

const div2 = (
    <div>
        <h1>hello</h1>
        <h3>world</h3>
    </div>
    
)

const options = (
    <React.Fragment>
        <option value="0">Israel</option>
        <option value="1">USA</option>
        <option value="2">Canada</option>
    </React.Fragment>
)

// no js reserved words

const div3 = (
    <div>
        { /*wrong */ }
        {/* <div class="you can"> */}

        { /*right */ }
        <div className="hello">
            <h1>hello</h1>
        </div>
        { /*wrong */ }
        <label for="stam"></label>

        { /*wrong */ }
        <label htmlFor="stam"></label>
        <input id="stam" />
    </div>
    
)

const div4 = (
    <div tabIndex="1" aria-description="">

    </div>
)

// put js in my jsx

const div5 = (
    <div>
        { false }
        { undefined }
        { null }
        { "" }
        { !true}
        { 1 == 1 && <h1>hello</h1>}        
        { 1 != 1 || <h1>hello or</h1>}
        {true}

        {
            [
                false,
                true,
                "hello array",
                <h1>hello in h1</h1>,
                (
                    <ul>
                        <li>stam list</li>
                    </ul>
                ),
                10
            ]
        }

        {
            // if (true) {
            //     console.log('hello')
            // } else {
                
            // }

            (function() {
                // if (true) {
                //     return 10;
                // }
                // return {key: 'hello'}
            })()
        }

        {
            true ? <h1>hey single line if works</h1> : null
        }

        {
            // for (let item of [1,2,3]) {

            // }
        }
    </div>
)

// 1. falsey => nothing

// 2.  primitives => string, number, boolean

// 3. jsx => react components, react elements

// 4. array of the above


const todo = [
    'buy grocery',
    'clean house',
    'walk dogs'
];

// [
//     <li>buy grocery</li>
// ]

const div6 = (
    <ul>
        {
            todo.map((item, index) => <li>{`${index} ${item}`}</li>)
        }
    </ul>
)

function IsAdmin(props) {
    const isAdmin = props.isAdmin;
    return (
        <div>
            { isAdmin ? <h1>user is admin</h1> : <h3>user is not admin</h3>}
        </div>
    )
}

// <div style="background-color: red"></div>
const div8 = (
    <div style={ {
        backgroundColor: 'red',
        fontSize: 20
    } } >
        hello
    </div>
)


function hey(msg, event) {
    alert(msg)
}

const button = (
    <button onClick={(event) => hey('hello im property in function', event)}>
        click me
    </button>
)

ReactDOM.render(
    div5, 
    document.getElementById('container')
)

function globalFunction() {
    console.log(this);
}