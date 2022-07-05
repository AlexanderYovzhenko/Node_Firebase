const functions = require("firebase-functions");
// const admin = require('firebase-admin');
// const { getDatabase } = require('firebase-admin/database');

// Get a database reference to our blog
// admin.initializeApp();
const { initializeApp, applicationDefault } = ('firebase-admin/app');

initializeApp({
  credential: applicationDefault(),
  projectId: '<nodefirebase-b1a6b>',
});
// const db = getDatabase();
// const ref = db.ref('nodefirebase-b1a6b/us-central1/updateUser');



// exports.requestUser = functions.https.onRequest(async (req, res) => {
//   const id = req.query.id;
  
//   const queryUser = await admin.firestore().collection('users').where('id', '==', id).get();
//   res.json(queryUser);
// });

exports.updateUser = functions.https.onRequest(async (req, res) => {

  // const usersRef = ref.child('users');
  // usersRef.set({
  //   alanisawesome: {
  //     date_of_birth: 'June 23, 1912',
  //     full_name: 'Alan Turing'
  //   }
  // });
  // const user = req.body;
  // const use = await admin.firestore().collection('users').add(user);
  res.json('ok');
});
