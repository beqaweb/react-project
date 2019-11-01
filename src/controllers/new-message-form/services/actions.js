import {mailsCollectionRef} from '../../../db';

export const sendMessage = values => (dispatch, getState) => {
    mailsCollectionRef.add({
        from: getState().auth.email,
        to: values.to,
        isRead: false,
        subject: values.subject,
        message: values.message,
        date: new Date(),
        types: {
            inbox: true,
            spam: false,
            trash: false
        }
    })
        .then(result => {
        })
        .catch(error => {
            // eslint-disable-next-line no-console
            console.error(error);
        });
};
