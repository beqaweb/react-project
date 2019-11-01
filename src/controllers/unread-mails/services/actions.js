import {
    FETCH_TRASH_NMBER,
    FETCH_SPAM_NMBER,
    FETCH_INBOX_NMBER
} from './constants';
import {mailsCollectionRef} from '../../../db';

export const fetchUnreadMails = () => (dispatch, getState) => {
    const userEmail = getState().auth.email;
    mailsCollectionRef
        .where('to', '==', userEmail)
        .where('types.inbox', '==', true)
        .where('isRead', '==', false)
        .onSnapshot(snapshot => {
            const payload = [];
            snapshot.forEach(doc => {
                payload.push(1);
            });
            dispatch({
                type: FETCH_INBOX_NMBER,
                payload: payload.length
            });
        });

    mailsCollectionRef
        .where('to', '==', userEmail)
        .where('types.spam', '==', true)
        .where('isRead', '==', false)
        .onSnapshot(snapshot => {
            const payload = [];
            snapshot.forEach(doc => {
                payload.push(1);
            });
            dispatch({
                type: FETCH_SPAM_NMBER,
                payload: payload.length
            });
        });

    mailsCollectionRef
        .where('to', '==', userEmail)
        .where('types.trash', '==', true)
        .where('isRead', '==', false)
        .onSnapshot(snapshot => {
            const payload = [];
            snapshot.forEach(doc => {
                payload.push(1);
            });
            dispatch({
                type: FETCH_TRASH_NMBER,
                payload: payload.length
            });
        });
};
