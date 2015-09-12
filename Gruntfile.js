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
      files: ['Gruntfile.js', 'app/**/*.js'],

      options: {

        curly: true,
        camelcase: true,
        eqeqeq: true,
        reporter: require('jshint-stylish'),
        globalstrict: false,
        undef: true,
        unused: true,
        node: true,
        mocha: true,
        expr: true
      }
    },

    // mochaTest: {
    //   test: {
    //     options: {
    //       reporter: 'spec',
    //       growl: true,
    //       timeout: 1000
    //     },
    //     src: ['test/*.js']
    //   }
    // },

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
        files: ['Gruntfile.js','app/**/*.js'],
        tasks: ['jshint'],
        options: {

        }
      }
      // ,
      // test: {
      //   files: ['test/*.js'],
      //   tasks: ['mochaTest'],
      //   options: {
      //     nospawn: false
      //   }
      // }
    }
  });

  grunt.registerTask('default', [
    'develop',
    // 'mochaTest',
    'jshint',
    'watch'
  ]);
};
