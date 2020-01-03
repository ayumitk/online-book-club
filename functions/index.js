const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello, ninjas!');
});

const createNotification = (notification) => (admin.firestore().collection('notification')
  .add(notification)
  .then((doc) => {
    console.log('notification added', doc);
  }));

exports.roomCreated = functions.firestore
  .document('rooms/{roomId}')
  .onCreate((doc) => {
    const room = doc.data();
    const notification = {
      content: 'Added a new room',
      user: room.authorName,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });
