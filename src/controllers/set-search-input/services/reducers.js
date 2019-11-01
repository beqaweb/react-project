import {SET_SEARCH} from './constants';

const DEFAULT_STATE = {
    value: ''
};

export const searchInput = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                value: action.payload
            };
    }
    return state;
};
