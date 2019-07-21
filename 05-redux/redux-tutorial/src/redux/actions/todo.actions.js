

export const SET_SEARCH = '[todo] SET_SEARCH';
export const SET_TASKS = '[todo] SET_TASKS';

export function setSearch(searchString) {
    return {
        type: SET_SEARCH,
        payload: searchString
    }
}

export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export function fetchTasks(search = '') {
    return async (dispatch) => {
        const response = await fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`);
        const tasks = await response.json();
        dispatch(setTasks(tasks));
    }
}