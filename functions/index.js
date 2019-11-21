// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const Bible = require('./controller/bible')

exports.bible = functions.https.onRequest(async (req, res) => {
    const bibleV = new Bible(
        req.query.language,
        req.query.version
        ).get(
            req.query.book,
            req.query.chapter,
            req.query.verse
            )
        
    console.log( req.query.language, req.query.book,
        req.query.chapter,
        req.query.verse,
        req.query.version)
    res.send(bibleV); 
  });

