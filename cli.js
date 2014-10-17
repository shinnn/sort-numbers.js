/*!
 * sort-numbers | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/sort-numbers.js
*/
'use strict';

var fs = require('fs');

var numbers = [];

var argv = require('minimist')(process.argv.slice(2).filter(function(arg) {
  var numberArg = parseFloat(arg);
  if (numberArg === numberArg) {
    numbers.push(numberArg);
    return false;
  }
  return true;
}), {
  alias: {
    d: 'desc',
    h: 'help',
    v: 'version'
  },
  boolean: ['desc', 'help', 'version']
});

var pkg = require('./package.json');

function help() {
  var chalk = require('chalk');

  console.log([
    chalk.cyan(pkg.name) + chalk.gray(' v' + pkg.version),
    pkg.description,
    '',
    'Usage: ' + pkg.name + ' <number0> [<number1> <number2> ...]',
    '',
    'Options:',
    chalk.yellow('--desc,    -d') + '  Sort numbers in descending order (ascending order by default)',
    chalk.yellow('--help,    -h') + '  Print usage information',
    chalk.yellow('--version, -v') + '  Print version',
    ''
  ].join('\n'));
}

if (argv.version) {
  console.log(pkg.version);

} else if (argv.help) {
  help();

} else if (argv._.length > 0) {
  process.stderr.write('Every argument should be a number.\n', function() {
    process.exit(1);
  });

} else if (numbers.length === 0) {
  help();

} else {
  var sortNumbers = require('./');

  var fn;
  if (argv.desc) {
    fn = sortNumbers.desc;
  } else {
    fn = sortNumbers;
  }

  console.log(fn(numbers).join(','));
}
