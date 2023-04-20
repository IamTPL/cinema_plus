import { localUser } from '../../../services/localStorage';
import { USER_LOGIN } from '../constant/userConstant';

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    userLogin: localUser.get('USER_LOGIN'),
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return { ...state, userLogin: payload };
        default:
            return state;
    }
};
