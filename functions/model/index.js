module.exports = (language="pt-br", version="NVI")=>{
    const bible = require(`./${language}/${version}`)();
    return bible
}