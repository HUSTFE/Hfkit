function hfkit() {
    var Globaldefine = require('./global')();
    
    console.log(argv);
    require('./command').commandHandler(argv._[0]);

}

exports = module.exports = hfkit;