import {FETCH_SENT} from './constants';

const DEFAULT_STATE = {
    mails: [],
    isFetched: false
};

export const sent = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_SENT: {
            return {
                ...state,
                mails: action.payload,
                isFetched: true
            };
        }
    }

    return state;
};
