
let allBuiltins = ['assert', 'buffer', 'child_process', 'cluster', 
                    'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 
                    'http', 'https', 'net', 'os', 'path', 'querystring', 
                    'readline', 'stream', 'string_decoder', 'timers', 
                    'tls', 'tty', 'url', 'util', 'v8', 'vm', 'zlib'];

module.exports = function(config, option = {whitelist: false, freeze: false}) {
  console.log(option);
  if (!option) {
    option = {
      whitelist: false,
      freeze: false
    }
  }

  const list = require(config);
  if (option.whitelist) {
    for (let mod of allBuiltins) {
      if (!list.whitelist.includes(mod)) {
        require.cache[mod] = {}
      }
    }
  } else {
    for (let mod of list.blacklist) {
      require.cache[mod] = {}
    }
  }

  if (option.freeze) {
    Object.freeze(require.cache);
    Object.seal(require.cache);
    Object.preventExtensions(require.cache);
  }
}

