import { legacy_createStore as createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Reducer } from './reducer';


const rootReducer = combineReducers({
    todo: Reducer
})

export const store = createStore(rootReducer, composeWithDevTools())
