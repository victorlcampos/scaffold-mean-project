'use strict';

exports.description = 'BETA: Scaffold a minimal MEAN Stack Application.';
exports.notes = '';
exports.after = 'You should now install project dependencies with _npm ' +
  'install_ and _bower install_. After that, you may execute project tasks with _gulp_.';
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt('name')
  ], function(err, props) {
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};