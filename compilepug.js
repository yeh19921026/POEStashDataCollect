const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('pug/index.pug');

console.log(compiledFunction({
    name: 'Timothy'
}));