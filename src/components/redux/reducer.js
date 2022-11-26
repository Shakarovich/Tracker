const defaultState = {
    todo: []
};
const ADD = "ADD";
const REMOVE = "REMOVE";


export const Reducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD:
        return {...state, todo: [...state.todo, action.paylod]}
        case REMOVE:
        return {...state, todo: state.todo.filter(todo => todo.id !== action.payload)}
        default:
            return state
    }   
};

export const addTodoAction = (payload) => ({type: ADD, payload});
export const removeTodoAction = (payload) => ({type: REMOVE, payload});