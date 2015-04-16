'use strict';
var prompt = require('prompt');
var replace = require('replace');

var meta = require('../package.json');


main();

function main() {
    var originals = {
        user: meta.user,
        project: meta.name,
    };
    var schema = {
        properties: {
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

    prompt.get(schema, function (err, result) {
        if(err) {
            return console.error(err);
        }

        var replacementPaths = [
            'README.md',
            'package.json',
        ];

        if(originals.user !== result.user) {
            replace({
                regex: originals.user,
                replacement: result.user,
                paths: replacementPaths,
                recursive: true,
                silent: false,
                quiet: false,
                count: true,
            });
        }

        if(originals.project !== result.project) {
            replace({
                regex: originals.project,
                replacement: result.project,
                paths: replacementPaths,
                recursive: true,
                silent: false,
                quiet: false,
                count: true,
            });
        }
    });
}
