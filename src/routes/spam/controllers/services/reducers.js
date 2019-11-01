import {FETCH_SPAM} from './constants';

const DEFAULT_STATE = {
    mails: [],
    isFetched: false
};

export const spam = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_SPAM: {
            return {
                ...state,
                mails: action.payload,
                isFetched: true
            };
        }
    }

    return state;
};
