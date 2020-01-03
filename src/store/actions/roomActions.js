export const createRoom = (room) => (dispatch, getState, { getFirebase, getFirestore }) => {
  // make async call to database
  const firestore = getFirestore();
  const { profile } = getState().firebase;
  const authorID = getState().firebase.auth.uid;
  firestore.collection('rooms').add({
    ...room,
    authorName: profile.name,
    authorId: authorID,
    createdAt: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
  });
};

export const test = 'test';
