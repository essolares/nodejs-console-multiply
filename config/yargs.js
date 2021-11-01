const argv = require('yargs')
    .options("b", { alias: 'base', type: 'number', demandOption: true, describe:'Multiply base'})
    .options("l", { alias: 'list', type:'boolean', demandOption: false, describe:'List in console' })
    .options("t", { alias: 'to', type:'number', describe:'Max number' })
    .check((argv,options) =>{
        if (isNaN(argv.b)){
            throw 'Base is not a number'
        }
        return true;
    })
    .argv;

module.exports = argv;