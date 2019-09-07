const restrict = require('../index');
restrict('../builtins.json')

let fs = require('fs');

fs.readFileSync('tmp.txt', {encoding:'utf8'});
