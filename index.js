// Import Holy Bible Content
const Bible = require('./functions/controller/bible')

//
const port = 8080;

const express = require('express');
const app = express();

const bodyParser = require('./functions/node_modules/body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/bible',(req, res, next) =>{
    const bibleV = new Bible(
        req.body.language,
        req.body.version
        ).get(
            req.body.book,
            req.body.chapter,
            req.body.verse
            )
        
    console.log( req.body.language, req.body.book,
        req.body.chapter,
        req.body.verse,
        req.body.version)
    res.send(bibleV); 
})

// Select language and version
const getLanguage = 'pt-br';
const getVersion = 'NVI'

// Instancie new class(Holy Bible)
const bible = new Bible(getLanguage, getVersion);

// Set values for get content
const getBook = 'mateus';
const getChapter = 1;
const getVerse = 1;

const bibleValue = bible.get(getBook,getChapter,getVerse)[0]
const [book, chapter, verse, title] = bible.get(getBook,getChapter,getVerse)[1]


// Next pass is control the data to use and view

console.log(JSON.stringify(bibleValue),chapter, verse, title)

app.listen(port, ()=>{      //Iniciando porta
    console.log(`Servidor executando na porta ${port}`);
});
