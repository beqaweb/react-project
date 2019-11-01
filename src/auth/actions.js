import {authRef, provider, usersCollectionRef} from '../db';
import {FETCH_USER} from './constants';

const checkUserOnExistence = (user, callback) => {
    usersCollectionRef.doc(user.uid).get()
        .then(
            doc => {
                if (!doc.exists) {
                    initializeUserData(user).then(() => callback());
                } else {
                    callback();
                }
            },
            error => callback(error)
        );
};

const initializeUserData = ({email, displayName, photoURL, uid}) => usersCollectionRef.doc(uid)
    .set({
        email,
        displayName,
        photoURL
    }, {merge: true});

export const fetchUser = () => dispatch => {
    let unsubscribe;
    authRef.onAuthStateChanged(user => {
        if (unsubscribe) {
            unsubscribe();
        }

        if (user) {
            checkUserOnExistence(user, err => {
                if (err) {
                    console.error(err); // eslint-disable-line no-console
                    return;
                }

                unsubscribe = usersCollectionRef.doc(user.uid).onSnapshot(
                    snapshot => {
                        dispatch({
                            type: FETCH_USER,
                            payload: {...snapshot.data(), id: user.uid}
                        });
                    },
                    error => console.error(error) // eslint-disable-line no-console
                );
            });
        } else {
            dispatch({
                type: FETCH_USER,
                payload: null
            });
        }
    });
};

export const signIn = () => dispatch => {
    authRef
        .signInWithPopup(provider)
        .then(result => {
        })
        .catch(error => {
        });
};

export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
        });
};
