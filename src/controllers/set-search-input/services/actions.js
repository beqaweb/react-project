import {SET_SEARCH} from './constants';

export const setSearch = val => dispatch => {
    dispatch({
        type: SET_SEARCH,
        payload: val
    });
};
