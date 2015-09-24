'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({



		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					outputStyle: 'compressed'
				},
				files: {                         // Dictionary of files
					'css/styles.css': 'scss/styles.scss',       // 'destination': 'source'
				}
			}
		},



		autoprefixer: {
			options: {
				browsers: ['last 8 versions'],
			},
			dist: {
				files: [{
					src: [
						'css/styles.css',
					]
				}]
			}
		},



		watch: {
			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			},
			livereload: {
				files: ['scss/**/*.scss', 'index.html'],
				options: {
					livereload: true
				}
			}
		},



		connect: {
			app: {
				options: {
					port: 9000,
					base: '',
					open: true,
					livereload: true,
					hostname: '0.0.0.0'
				}
			},
		},



	});

	grunt.registerTask('default', ['sass', 'autoprefixer', 'connect:app', 'watch']);
};
