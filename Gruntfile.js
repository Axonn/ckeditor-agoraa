﻿'use strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'dev/builder/release/ckeditor/ckeditor.js',
                    'dev/builder/release/ckeditor/plugins/image3/{,*/}*.js',
                ],
                dest: 'dist/ckeditor.js'
            }
        }, 
        copy: {        
            dist: {
                expand: true,     
                cwd: 'dev/builder/release/ckeditor',
                src: ['skins/bootstrapck/**',
                      'lang/en-gb.js', 
                      'lang/en.js', 
                      'config.js', 
                      'styles.js', 
                      'plugins/a11yhelp/**',
                      'plugins/agaddimage/**',
                      'plugins/aguploadfile/**',
                      'plugins/clipboard/**',
                      'plugins/colordialog/**',
                      'plugins/div/**',
                      'plugins/find/**',
                      'plugins/iframe/**',
                      'plugins/image3/**',
                      'plugins/link/**',
                      'plugins/liststyle/**',
                      'plugins/magicline/**',
                      'plugins/oembed/**',
                      'plugins/pastefromword/**',
                      'plugins/scayt/**',
                      'plugins/specialchar/**'],
                dest: 'dist/'
            }
        },
        shell: {
          options: {
              stderr: false,
              execOptions: {
                cwd: 'dev/builder/'
              }
          },
          target: {
              command: 'build.sh'
          }
        },
         release: {
            options: {
              npm: false,
              file: 'bower.json'
            }
          } 
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['shell', 'concat', 'copy']);
    grunt.registerTask('build', ['default']);
}
