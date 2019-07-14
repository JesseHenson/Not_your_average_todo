export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';


export const requestTodos = () => ({
    type: REQUEST_TODOS,
});

export const receivedTodos = json => ({
    type: RECEIVE_TODOS,
    json: json,
});

export const fetchTodos = () => dispatch => {
        store.dispatch(requestTodos)
        return fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
        .then((json) => {
            dispatch(receivedTodos(json));
        },
    )
}
