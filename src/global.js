/**
 * Global Tool Inject and Const Define
 */

function GlobalDefine() {
    global.argv = require('./command')();
}

exports = module.exports = GlobalDefine;