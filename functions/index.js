const functions = require('firebase-functions');
const app = require('express')();
const Bible = require('./controller/bible')
const admin = require('firebase-admin');
const cors = require('cors');


admin.initializeApp();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));


app.get('/bible',(req, res, next) =>{
    
    const array =[
        req.body.language,
        req.body.version,
        req.body.book,
        req.body.chapter,
        req.body.verse]
    const bibleV = new Bible(
        array[0], array[1]
        )            
            res.send(bibleV.get(array[2],array[3],array[4])) 
        })
        
exports.api = functions.https.onRequest(app)




