import { ADD_SEAT } from '../constant/bookingConstant';

const initialState = {
    seatsChecked: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SEAT:
            let newState = { ...state };
            newState.seatsChecked.push(payload);
            return newState;

        default:
            return state;
    }
};
