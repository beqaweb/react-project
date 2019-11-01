import {
    FETCH_INBOX_NMBER,
    FETCH_SPAM_NMBER,
    FETCH_TRASH_NMBER
} from './constants';

const DEFAULT_STATE = {
    inbox: 0,
    spam: 0,
    trash: 0
};

export const unreadMails = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_INBOX_NMBER: {
            return {
                ...state,
                inbox: action.payload
            };
        }
        case FETCH_SPAM_NMBER: {
            return {
                ...state,
                spam: action.payload
            };
        }
        case FETCH_TRASH_NMBER: {
            return {
                ...state,
                trash: action.payload
            };
        }
    }

    return state;
};
