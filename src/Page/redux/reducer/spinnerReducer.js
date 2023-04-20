/* eslint-disable import/no-anonymous-default-export */
import { OFF_LOADING, ON_LOADING } from '../constant/spinnerConstant';

const initialState = {
    isLoading: false,
};

export default (state = initialState, { type }) => {
    switch (type) {
        case ON_LOADING:
            return { ...state, isLoading: true };
        case OFF_LOADING:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};
