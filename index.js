
module.exports = function(config, whitelist = false) {
  const list = require(config);
  if (whitelist) {

  } else {
    for (let mod of list.blacklist) {
      require.cache[mod] = {}
    }
    console.log(require.cache)
  }
  
}

