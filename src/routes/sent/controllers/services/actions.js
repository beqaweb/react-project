import {FETCH_SENT} from './constants';
import {mailsCollectionRef} from '../../../../db';


export const fetchSentMails = () => (dispatch, getState) => {
    mailsCollectionRef.where('from', '==', getState().auth.email).onSnapshot(
        snapshot => {
            const payload = [];
            snapshot.forEach(doc => {
                payload.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            dispatch({
                type: FETCH_SENT,
                payload
            });
        },
        error => console.error(error) // eslint-disable-line no-console
    );
};
