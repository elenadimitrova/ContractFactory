'use strict';

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    shell: {
      compile: {
        command: 'node ./compile.js'
      },
      deploy: {
        command: 'node ./deploy.js'
      },
      options: {
        stdout: true,
        stderr: true,
        failOnError: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.registerTask('deploy',[
    'shell:compile',
    'shell:deploy'
  ]);
};
