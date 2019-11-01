import {FETCH_USER} from './constants';

export const auth = (state = false, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || null;
        default:
            return state;
    }
};
