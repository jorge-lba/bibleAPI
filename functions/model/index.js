/**
 * Antigo Testamento
 */
module.exports =(language, version) =>{


    genesis = require(`./${language}/${version}/_genesis`);
    exodo = require(`./${language}/${version}/_exodo`);
    levitico = require(`./${language}/${version}/_levitico`);
    numeros = require(`./${language}/${version}/_numeros`);
    deuteronomio = require(`./${language}/${version}/_deuteronomio`);
    josue = require(`./${language}/${version}/_josue`);
    juizes = require(`./${language}/${version}/_juizes`);
    rute = require(`./${language}/${version}/_rute`);
    Isamuel = require(`./${language}/${version}/_Isamuel`);
    IIsamuel = require(`./${language}/${version}/_IIsamuel`);
    Ireis = require(`./${language}/${version}/_Ireis`);
    IIreis = require(`./${language}/${version}/_IIreis`);
    Icronicas = require(`./${language}/${version}/_Icronicas`);
    IIcronicas = require(`./${language}/${version}/_IIcronicas`);
    esdras = require(`./${language}/${version}/_esdras`);
    neemias = require(`./${language}/${version}/_neemias`);
    ester = require(`./${language}/${version}/_ester`);
    jo = require(`./${language}/${version}/_jo`);
    salmos = require(`./${language}/${version}/_salmos`);
    proverbios = require(`./${language}/${version}/_proverbios`);
    eclesiastes = require(`./${language}/${version}/_eclesiastes`);
    canticos = require(`./${language}/${version}/_canticos`);
    isaias = require(`./${language}/${version}/_isaias`);
    jeremias = require(`./${language}/${version}/_jeremias`);
    lamentacoes = require(`./${language}/${version}/_lamentacoes`);
    ezequiel = require(`./${language}/${version}/_ezequiel`);
    daniel = require(`./${language}/${version}/_daniel`);
    oseias = require(`./${language}/${version}/_oseias`);
    joel = require(`./${language}/${version}/_joel`);
    amos = require(`./${language}/${version}/_amos`);
    obadias = require(`./${language}/${version}/_obadias`);
    jonas = require(`./${language}/${version}/_jonas`);
    miqueias = require(`./${language}/${version}/_miqueias`);
    naum = require(`./${language}/${version}/_naum`);
    habacuque = require(`./${language}/${version}/_habacuque`);
    sofonias = require(`./${language}/${version}/_sofonias`);
    ageu = require(`./${language}/${version}/_ageu`);
    zacarias = require(`./${language}/${version}/_zacarias`);
    malaquias = require(`./${language}/${version}/_malaquias`);



    /**
     * Novo testamento
     */

    mateus = require(`./${language}/${version}/_mateus`);
    marcos = require(`./${language}/${version}/_marcos`);
    lucas = require(`./${language}/${version}/_lucas`);
    joao = require(`./${language}/${version}/_joao`);
    atos = require(`./${language}/${version}/_atos`);
    romanos = require(`./${language}/${version}/_romanos`);
    Icorintios = require(`./${language}/${version}/_Icorintios`);
    IIcorintios = require(`./${language}/${version}/_IIcorintios`);
    galatas = require(`./${language}/${version}/_galatas`);
    efesios = require(`./${language}/${version}/_efesios`);
    filipenses = require(`./${language}/${version}/_filipenses`);
    colossenses = require(`./${language}/${version}/_colossenses`);
    Itessalonicenses = require(`./${language}/${version}/_Itessalonicenses`);
    IItessalonicenses = require(`./${language}/${version}/_IItessalonicenses`);
    Itimoteo = require(`./${language}/${version}/_Itimoteo`);
    IItimoteo = require(`./${language}/${version}/_IItimoteo`);
    tito = require(`./${language}/${version}/_tito`);
    filemom = require(`./${language}/${version}/_filemom`);
    hebreus = require(`./${language}/${version}/_hebreus`);
    tiago = require(`./${language}/${version}/_tiago`);
    Ipedro = require(`./${language}/${version}/_Ipedro`);
    IIpedro = require(`./${language}/${version}/_IIpedro`);
    Ijoao = require(`./${language}/${version}/_Ijoao`);
    IIjoao = require(`./${language}/${version}/_IIjoao`);
    IIIjoao = require(`./${language}/${version}/_IIIjoao`);
    judas = require(`./${language}/${version}/_judas`);
    apocalipse = require(`./${language}/${version}/_apocalipse`);

    return {
        // Antigo Testamento

        genesis, exodo, levitico, numeros, deuteronomio,
        josue, juizes, rute, Isamuel, IIsamuel, Ireis, IIreis,
        Icronicas, IIcronicas, esdras, neemias, ester, jo,
        salmos, proverbios, eclesiastes, canticos, isaias,
        jeremias, lamentacoes, ezequiel, daniel, oseias, joel,
        amos, obadias, jonas, miqueias, naum, habacuque, sofonias,
        ageu, zacarias, malaquias,

        // Novo Testamento

        mateus, marcos, lucas, joao, atos, romanos, Icorintios, IIcorintios,
        galatas, efesios, filipenses, colossenses, Itessalonicenses,
        IItessalonicenses, Itimoteo, IItimoteo, tito, filemom, hebreus, tiago,
        Ipedro, IIpedro, Ijoao, IIjoao, IIIjoao, judas, apocalipse

    }

}


//exports.AllBible = {genesis, exodo},

//console.log(this.AllBible.genesis.one.one.a)

// Não sei ainda






