// Import Holy Bible Content
const Bible = require('./controller/bible')

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
