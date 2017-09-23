/**
 * Global Tool Inject and Const Define
 */

function GlobalDefine() {
    global.argv = require('./command').commandPrepare();
}

exports = module.exports = GlobalDefine;