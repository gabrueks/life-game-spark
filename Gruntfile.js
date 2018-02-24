module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'game/*.js', 'testing/*.js']
    },
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'spec'
      },

      all: { src: 'testing/*-test.js' }
    },
    watch: {
      validate_and_test: {
        files: ['**/*.js'],
        tasks: ['jshint', 'test']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', 'simplemocha');
};
