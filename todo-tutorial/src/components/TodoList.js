import React, {useState, useEffect} from 'react';

export default function TodoList() {
    const [tasks, setTasks] = useState([])

    // componentDidMount, componentDidUpdate
    useEffect(() => {
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((response) => {
                
                response.json().then((tasks) => {
                    
                    
                    setTasks(tasks);
                })

                

            })
    }, [])

    return (
        <ul>
            {
                tasks.map(function(singleTodo) {
                    return (
                        <li key={singleTodo.id}>{singleTodo.title}</li>
                    )
                })
            }
        </ul>
    )
}