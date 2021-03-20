const os = require("os");

console.log(os.arch())

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`)

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`)

console.log(os.hostname())
console.log(os.platform())
console.log(os.type())