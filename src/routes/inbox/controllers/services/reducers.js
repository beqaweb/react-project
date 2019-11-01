import {FETCH_INBOX} from './constants';

const DEFAULT_STATE = {
    mails: [],
    isFetched: false
};

export const inbox = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_INBOX: {
            return {
                ...state,
                mails: action.payload,
                isFetched: true
            };
        }
    }

    return state;
};
