import {FETCH_SPAM} from './constants';
import {spamQuery, mailsCollectionRef} from '../../../../db';


export const fetchSpamMails = () => (dispatch, getState) => {
    spamQuery.where('to', '==', getState().auth.email).onSnapshot(
        snapshot => {
            const payload = [];
            snapshot.forEach(doc => {
                payload.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            dispatch({
                type: FETCH_SPAM,
                payload
            });
        },
        error => console.error(error) // eslint-disable-line no-console
    );
};

export const readInboxMail = mailId => dispatch => {
    mailsCollectionRef.doc(mailId)
        .set({
            isRead: true
        }, {merge: true});
};

export const moveMailFromSpamToTrash = mailId => dispatch => {
    mailsCollectionRef.doc(mailId)
        .set({
            types: {
                inbox: false,
                sent: false,
                spam: false,
                trash: true
            }
        }, {merge: true});
};
