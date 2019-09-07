let test = require('tape');
const restrict = require('..');
restrict('./builtins.json', {whitelist: true});

test('testing whitelisting built-ins', function(t) {
  t.plan(1)
  let fs = require('fs');
  let content = fs.readFileSync('./test/hello.txt', {encoding:'utf8'});
  t.equal(content, 'hello');
});
