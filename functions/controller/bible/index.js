const allBible = require('../../model')

Array.prototype.mapToFalse = function(callback){
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        if(this[i]){
            newArray.push(callback(this[i], i, this));
        }else{
            return newArray;
        }
    }
    return newArray;
}

const assentRemove = (text) =>{       
    text = text.toString().toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text.replace(' ','').replace(' ', '').replace('1','I').replace('2','II').replace('3','III');                 
};

module.exports = class Bible {
    constructor(language = 'pt-br', version = 'NVI'){
        this.all = allBible(language,version);
        this.objectName = 'this.all'
    }


    testBible(array){
       
        let keyObject = {};
        const lengthArray = array.length;
        let count = 0;
        const arrayBible = [];

        for(let i = 0; i< lengthArray; i++){

            keyObject = Object.keys(this.selectObject(this.objectName,arrayBible))
            let lengthKey = keyObject.length;

            if(count == 1) lengthKey = lengthKey-4;

            for(let i =0; i < lengthKey; i++){

                if(keyObject[i] == array[count]){

                    arrayBible[count] = array[count];
                    i = keyObject.length+10

                }else{

                    if(array[count]< 1){

                        arrayBible[count] = 1;
                        array[count] = 1;

                    }else if(array[count] > lengthKey){

                        arrayBible[count] = lengthKey;
                        array[count] = lengthKey

                    }else{
                        arrayBible[count] = 0;
                    }
                }
            }

            if(arrayBible[count] == false){

                const bibleError = this.selectObject(this.objectName,[]);
                const errorKeys = Object.keys(bibleError)
                return [errorKeys.map(e => bibleError[e]['title']), array]

            } 

            count++;
            
        }

        array.push(this.all[array[0]].title)

        return [this.selectObject(this.objectName,arrayBible),array]
    }


    selectObject(objectName,array){
        
        for(let i = 0; i < array.length; i++){
            objectName += "["+"\"" +`${array[i]}`+"\"" +"]"
        }
        return eval(objectName);
    }

    testValue(value){
        if(isNaN(value)){
            return 0
        }else if(value < 0){
            return 1
        }else{
            return value
        }
    }
    
    get(book, chapter, verse){                  // Fazer melhorias para ser mais flexivel (Idéia: Usar um array com todos os parametros)

        if(book == false || book == undefined)return 'Selecione um livro!'
        chapter = this.testValue(chapter);
        verse = this.testValue(verse);
        book = assentRemove(book)
       
        const arrayBible = [book,chapter,verse].mapToFalse(e => e);
        const bibleTested = this.testBible(arrayBible);

        return bibleTested
    }
  
}