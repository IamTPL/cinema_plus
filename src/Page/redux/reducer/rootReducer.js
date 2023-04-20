import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import spinnerReducer from './spinnerReducer';
import modalReducer from './modalReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
    userReducer,
    spinnerReducer,
    modalReducer,
    bookingReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
