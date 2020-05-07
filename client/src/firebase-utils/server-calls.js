import { db, auth } from "../services/firebase.js";
import firebase from "firebase/app"
// let FieldValue = require('firebase-admin').firestore.FieldValue;

const getAllRequests = () => {
    const userData = [];
    db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id
        userData.push({id, ...data});
      });
      //console.log(userData)
    })
    .catch((error) => console.log(error));
    return userData;
}

const postRequest = (request) => {
    db.collection('users').add({
        name: request.name,
        email: request.email,
        request: request.request,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        resolved: false
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}

const deleteRequest = (id) => {
    db.collection('users').doc(id).delete()
    .then(response => {
        console.log('request succesfully deleted')
    })
    .catch(err => {
        console.log('error:', err)
    })
}

export {
    getAllRequests,
    postRequest,
    deleteRequest
}