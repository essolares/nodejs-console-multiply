const argv = require('./config/yargs');
const colors = require("colors");
const { createFile } = require('./helpers/multiply');
console.clear();
createFile(argv.b,argv.l,argv.t)
.then(fileName => console.log(fileName.rainbow, ' Created'))
.catch(err => console.log(err));

