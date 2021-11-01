const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 5,list = false,max = 10) => {

    try {
        console.log('------------------------'.green);
        console.log('TABLE:', colors.blue(base))
        console.log('------------------------'.green);
        let output = "";
        for (let i = 1; i <= max; i++) {
            output += (`${base} x ${i} = ${base * i} \n`);
        }
        if (list) console.log(output.cyan);

        fs.writeFileSync(`table-${base}.txt`, output);
        return `table-${base}.txt`;
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFile
}