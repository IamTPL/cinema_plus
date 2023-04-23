import { ADD_SEAT, CLEAR_SEAT } from '../constant/bookingConstant';

const initialState = {
    seatsChecked: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SEAT:
            let newState = { ...state };
            newState.seatsChecked.push(payload);
            return newState;

        case CLEAR_SEAT:
            return { state, seatsChecked: [] };

        default:
            return state;
    }
};
