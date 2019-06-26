import React, {useState, useEffects} from 'react';

export default class TodoListClass extends React.Component {
    state = {
        tasks: []
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((response) => {
                response.json().then((tasks) => {
                    this.setState({
                        tasks: tasks
                    })
                })

            })
    }

    // componentDidUpdte(prevProps, prevState) {
    //     if (this.state.tasks !== prevState.tasks) {
    //         ...
    //     }
    // }

    render() {
        return null;
    }
}

// export default function TodoList() {
//     const [tasks, setTasks] = useState([])

//     // componentDidMount, componentDidUpdate
//     useEffects(() => {

//     }, [tasks])

//     return (

//     )
// }