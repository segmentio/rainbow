
/**
 * Dependencies.
 */

var Rainbow = require('./js/rainbow')
  , languages = [
      require('./js/language/c.js'),
      require('./js/language/coffeescript.js'),
      require('./js/language/csharp.js'),
      require('./js/language/css.js'),
      require('./js/language/d.js'),
      require('./js/language/generic.js'),
      require('./js/language/go.js'),
      require('./js/language/haskell.js'),
      require('./js/language/html.js'),
      require('./js/language/java.js'),
      require('./js/language/javascript.js'),
      require('./js/language/lua.js'),
      require('./js/language/php.js'),
      require('./js/language/python.js'),
      require('./js/language/r.js'),
      require('./js/language/ruby.js'),
      require('./js/language/scheme.js'),
      require('./js/language/shell.js'),
      require('./js/language/smalltalk.js')
    ];


/**
 * Extend Rainbow with each language.
 */

for (var i = 0, settings; settings = languages[i]; i++) {
  Rainbow.extend.apply(Rainbow, settings);
}


/**
 * Exports.
 */

module.exports = Rainbow;