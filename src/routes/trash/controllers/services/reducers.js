import {FETCH_TRASH} from './constants';

const DEFAULT_STATE = {
    mails: [],
    isFetched: false
};

export const trash = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_TRASH: {
            return {
                ...state,
                mails: action.payload,
                isFetched: true
            };
        }
    }

    return state;
};
