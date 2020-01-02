export const createRoom = (room) => (dispatch, getState, { getFirestore }) => {
  // make async call to database
  const firestore = getFirestore();
  firestore.collection('rooms').add({
    ...room,
    authorName: 'Gina',
    authorId: 12345,
    createdAt: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
  });
};
