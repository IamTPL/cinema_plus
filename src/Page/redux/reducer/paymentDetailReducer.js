import { ADD_SEAT } from '../constant/paymentDetailConstants';

const initialState = {
    seatsArr: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SEAT: {
            const newSeatsArr = [...state.seatsArr];
            let index = state.seatsArr.findIndex(
                (seat) => seat.maGhe === payload.maGhe
            );

            if (index !== -1) {
                newSeatsArr.splice(index, 1);
            } else {
                newSeatsArr.push(payload);
            }

            return { ...state, seatsArr: newSeatsArr };
        }
        default:
            return state;
    }
};
