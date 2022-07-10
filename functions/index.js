const functions = require("firebase-functions");
const admin = require('firebase-admin');
// const { getDatabase } = require('firebase-admin/database');

// Get a database reference to our blog
admin.initializeApp();
// const { initializeApp, applicationDefault } = ('firebase-admin/app');

// initializeApp({
//   credential: applicationDefault(),
//   projectId: '<nodefirebase-b1a6b>',
// });
// const db = admin.firestore();
// const ref = db.ref('nodefirebase-b1a6b/us-central1/updateUser');



exports.requestUser = functions.https.onRequest(async (req, res) => {
  const id = req.query.id;
  
  const queryUser = await admin.firestore().collection('users').where('id', '==', id).get();
  res.json(queryUser);
});

exports.createUser = functions.https.onRequest(async (req, res) => {
   const data = req.body;

   const saveUser = await admin.firestore().collection('users').add(data);
   res.json(saveUser);
});
    