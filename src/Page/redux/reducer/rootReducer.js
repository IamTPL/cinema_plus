import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import spinnerReducer from './spinnerReducer';
import modalReducer from './modalReducer';
import bookingReducer from './bookingReducer';
import paymentDetailReducer from './paymentDetailReducer';

const rootReducer = combineReducers({
    userReducer,
    spinnerReducer,
    modalReducer,
    bookingReducer,
    paymentDetailReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
