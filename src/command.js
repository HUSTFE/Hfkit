/**
 * init command help and return argv
 */

function commandPrepare() {
    var yargs = require('yargs');

    return yargs
        .command('start', 'starter kit for different use')
        .command('gen', 'generate a template by default or your template', {})
        .command('build', 'build this project through build-in option or your option', {})
        .command('serve', 'start a hot reload server for this project', {})
        .options({
            'type':{alias: 't', describe: '[start] starter kit type name'}
        })
        .help()
        .showHelpOnFail(true, 'type --help for available options')
        .demandCommand(1, 'You must provide at least one command')
        .epilogue('Created by HUSTFE, https://github.com/HUSTFE')
        .argv;
}

function commandhandler() {
    this['start'] = require('./start');
    this['gen'] = require('./generator');
    this['build'] = require('./build');
    this['serve'] = require('./serve');
}

exports = module.exports = {commandPrepare: commandPrepare};