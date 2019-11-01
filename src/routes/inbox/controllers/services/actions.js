import {FETCH_INBOX} from './constants';
import {inboxQuery, mailsCollectionRef} from '../../../../db';


export const fetchInboxMails = () => (dispatch, getState) => {
    inboxQuery.where('to', '==', getState().auth.email).onSnapshot(
        snapshot => {
            const payload = [];
            snapshot.forEach(doc => {
                payload.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            dispatch({
                type: FETCH_INBOX,
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

export const moveMailFromInboxToSpam = mailId => dispatch => {
    mailsCollectionRef.doc(mailId)
        .set({
            types: {
                inbox: false,
                sent: false,
                spam: true,
                trash: false
            }
        }, {merge: true});
};

export const moveMailFromInboxToTrash = mailId => dispatch => {
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
