'use strict';
var prompt = require('prompt');
var replace = require('replace');

var meta = require('../package.json');

main();

function main() {
  var originals = {
    author: meta.author,
    user: meta.user,
    project: meta.name,
  };
  var schema = {
    properties: {
      author: {
        description: 'Enter package author',
        default: originals.author,
        required: true
      },
      user: {
        description: 'Enter GitHub user/organization name',
        default: originals.user,
        required: true
      },
      project: {
        description: 'Enter GitHub project name',
        default: originals.project,
        required: true
      },
    }
  };

  prompt.start();

  prompt.get(schema, function(err, result) {
    if (err) {
      return console.error(err);
    }

    var replacementPaths = [
    'README.md',
    'package.json',
    ];

    if (originals.author !== result.author) {
      console.log('replacing author');

      replace({
        regex: originals.author,
        replacement: result.author,
        paths: [
        'LICENSE',
        'package.json',
        ],
        recursive: true,
        silent: false,
        count: true,
      });
    }

    if (originals.user !== result.user) {
      console.log('replacing users/organizations');

      replace({
        regex: originals.user,
        replacement: result.user,
        paths: replacementPaths,
        recursive: true,
        silent: false,
        count: true,
      });
    }

    if (originals.project !== result.project) {
      console.log('replacing projects');

      replace({
        regex: originals.project,
        replacement: result.project,
        paths: replacementPaths,
        recursive: true,
        silent: false,
        count: true,
      });
    }
  });
}
