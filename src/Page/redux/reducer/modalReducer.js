import { HIDE_MODAL, SHOW_MODAL } from '../constant/modalConstant';

const initialState = {
    isModalOpen: false,
    urlTrailerBanner: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL: {
            if (payload.includes('/watch?v=')) {
                payload = payload.replace('/watch?v=', '/embed/');
            }
            return {
                ...state,
                isModalOpen: true,
                urlTrailerBanner: payload,
            };
        }
        case HIDE_MODAL:
            return { ...state, isModalOpen: false };

        default:
            return state;
    }
};
