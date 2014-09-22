﻿'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'dev/builder/release/ckeditor/ckeditor.js',
                    'dev/builder/release/ckeditor/lang/en-gb.js',
                    'dev/builder/release/ckeditor/plugins/image3/{,*/}*.js',
                ],
                dest: 'release/ckeditor/ckeditor.js'
            }
        }, 
        copy: {        
            dist: {
                expand: true,     
                cwd: 'dev/builder/release/ckeditor',
                src: ['skins/bootstrapck/**', 
                      'plugins/a11yhelp/**',
                      'plugins/clipboard/**',
                      'plugins/colordialog/**',
                      'plugins/div/**',
                      'plugins/find/**',
                      'plugins/iframe/**',
                      'plugins/image3/**',
                      'plugins/link/**',
                      'plugins/liststyle/**',
                      'plugins/oembed/**',
                      'plugins/pastefromword/**',
                      'plugins/scayt/**',
                      'plugins/specialchar/**'],
                dest: 'release/ckeditor'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['concat', 'copy']);
    grunt.registerTask('build', ['default']);

}
