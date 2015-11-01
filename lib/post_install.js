// adapted based on rackt/history (MIT)
// Node 0.12+
var execSync = require('child_process').execSync;
var stat = require('fs').stat;

function exec(command) {
  execSync(command, {
    stdio: [0, 1, 2]
  });
}

stat('dist-modules', function(error, stat) {
  if (error || !stat.isDirectory()) {
    exec('npm i babel@5.x');
    exec('npm run dist-modules');
  }
});
