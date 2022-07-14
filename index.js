const express = require('express')
const bodyParser = require('body-parser')
const { initializeApp } = require ('firebase/app')
const { getFirestore, collection, getDocs } = require ('firebase/firestore/lite')
require ('dotenv/config')

const firebaseConfig = {
  apiKey: "AIzaSyC0816dqkWttO_YmFkuknU7Eo1tP9bq7TY",
  authDomain: "nodefirebase-b1a6b.firebaseapp.com",
  projectId: "nodefirebase-b1a6b",
  storageBucket: "nodefirebase-b1a6b.appspot.com",
  messagingSenderId: "237810010438",
  appId: "1:237810010438:web:a0c5d2ab90c1b397493d47",
  measurementId: "G-08ZXPWSS47"
};

const appFireStore = initializeApp(firebaseConfig)

const db = getFirestore(appFireStore)

const { PORT } = process.env

const app = express()

app.listen(PORT, () => {
  console.info(`Server is running on ${PORT}!`)
})

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const { id } = req.query
 
  res.send(JSON.stringify(await requestUser(id)))
})

app.post('/', (req, res) => {
  
})


async function requestUser (id) {
  const citiesCol = collection(db, 'users');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data()).filter(doc => doc.id === id);
  return cityList;
}

async function createUser () {
  var pushedRef = firebase.database().ref('users').push({ email: email });
  console.log(pushedRef.key);
  const citiesCol = collection(db, 'users');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
