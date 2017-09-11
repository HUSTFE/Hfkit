/**
 * Global Tool Inject and Const Define
 */

function GlobalDefine() {
    global.command = require('./command');
    global.argv = command.commandPrepare();
}

exports = module.exports = GlobalDefine;