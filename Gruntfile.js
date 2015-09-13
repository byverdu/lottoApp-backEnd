module.exports = function(grunt) {
  'use strict';
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'app/bin/init'
      }
    },

    jshint: {
      files: ['test/*.js','Gruntfile.js', 'app/**/*.js'],

      options: {
        curly: true,
        camelcase: true,
        eqeqeq: true,
        reporter: require('jshint-stylish'),
        globalstrict: true,
        undef: true,
        unused: true,
        node: true,
        mocha: true,
        expr: true,
        esnext: true
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      server: {
        files: [
          'app/bin/init'
        ],
        tasks: ['develop', 'jshint']
      },
      js: {
        files: ['test/*.js','Gruntfile.js', 'app/**/*.js'],
        tasks: ['jshint'],
        options: {

        }
      }
    }
  });

  grunt.registerTask('default', [
    'develop',
    'jshint',
    'watch'
  ]);
};
