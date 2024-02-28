const userInfos = require('./informations')
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Vache de ${userInfos.info.name} ` + `partant à ` + `${userInfos.info.campus}`,
    e : "oO",
    T : "U "
}));