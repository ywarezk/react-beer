/**
 * display hello world
 * class component
 */

 import React from 'react';


 // this.props
 // state = {isShow : true/false}
 export default class HelloClass extends React.Component {
    state = {
        isShow : true
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isShow : true
    //     }
    // }

    toggleVisibility = () => {
        // this.setState({
        //     isShow: !this.state.isShow
        // });

        this.setState((prevState) => {
            return {
                isShow: !prevState.isShow
            }
        })
    }

    render() {
        return (
            <div>
                <h1>hello world from class </h1>
                {
                    this.state.isShow && (
                        <h3>
                            {this.props.psh}
                        </h3>
                    ) 
                }
                
                <button onClick={this.toggleVisibility}>Toggle Visiblity</button>
            </div>
            
        );
    }
 }