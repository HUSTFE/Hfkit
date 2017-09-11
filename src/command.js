/**
 * init command help and return argv
 */

function commandHandler() {
    return yargs
        .command('start', 'starter kit for different use', {})
        .command('gen', 'generate a template by default or your template', {})
        .command('build', 'build this project through build-in option or your option', {})
        .command('serve', 'start a hot reload server for this project', {})
        .help()
        .argv;

}

exports = module.exports = commandHandler;