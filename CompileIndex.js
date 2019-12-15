const pug = require('pug');
var fs = require('fs');

// Compile the source code
const compiledFunction = pug.compileFile('pug/Index/index.pug');

fs.writeFile('docs/index.html', compiledFunction({ name: 'Timothy' }), function (err) {
	if (err)
		console.log(err);
	else
		console.log('Write operation complete.');
});
console.log(compiledFunction({
	name: 'Timothy'
}));
