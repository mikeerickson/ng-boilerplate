var utils   = require('./tasks/utils/cd-utils');
var line    = require('chalkline');
var msg     = require('gulp-messenger');
var chalk   = require('chalk');

var data    = utils.readFile('./.bowerrc','json');

console.log('\n');
line.green();
console.log('\n');

var numCols = 'Bower Components Directory:'.length;

msg.header(chalk.green(utils.padRight('Here are your default settings', 60)));
msg.header(chalk.red(utils.padLeft('Here are your default settings', 60)));
msg.header(chalk.yellow(utils.padCenter('Here are your default settings', 60)));
console.log('\n');

line.red();

console.log(utils.padRight('Bower Components Directory:', numCols),'./' + data.directory);
console.log(utils.padRight('Day Of Week:', numCols), utils.getDayOfWeek());
console.log(utils.padRight('Time Stamp:', numCols), utils.timestamp());
console.log(utils.padRight('Time Stamp w/ Format:', numCols), utils.timestamp('YYYY-MM hh:mm'));
console.log(utils.padRight('Is Windows:', numCols), utils.isWindows());
console.log(utils.padRight('Platform:', numCols), utils.platform());
console.log(utils.padRight('agrv:', numCols), process.argv);
console.log(chalk.magenta(utils.padRight('filename:', numCols), process.mainModule.filename));
console.log(chalk.yellow(utils.padRight('paths:', numCols), process.mainModule.paths));
//console.log(utils.padRight('versions:', numCols), process.versions);
console.log(utils.padRight('PATH:', numCols), process.env.PATH);
console.log(utils.padRight('HOME:', numCols), process.env.HOME);
console.log(chalk.red(utils.padRight('LOGNAME:', numCols), process.env.LOGNAME));
console.log(chalk.green(utils.padRight('PWD:', numCols), process.env.PWD));

console.log(chalk.bgRed(utils.padRight('PWD:', numCols), process.env.PWD));
console.log(chalk.bgGreen(utils.padRight('PWD:', numCols), process.env.PWD));
console.log(chalk.bgYellow(utils.padRight('PWD:', numCols), process.env.PWD));


console.log('\n');
