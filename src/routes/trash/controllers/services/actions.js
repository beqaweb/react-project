import {FETCH_TRASH} from './constants';
import {trashQuery, mailsCollectionRef} from '../../../../db';


export const fetchSpamTrashMails = () => (dispatch, getState) => {
    trashQuery.where('to', '==', getState().auth.email).onSnapshot(
        snapshot => {
            const payload = [];
            snapshot.forEach(doc => {
                payload.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            dispatch({
                type: FETCH_TRASH,
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

export const deleteMailForever = mailId => dispatch => {
    mailsCollectionRef.doc(mailId).delete()
        .then()
        .then(result => {
        })
        .catch(error => {
        });
};
